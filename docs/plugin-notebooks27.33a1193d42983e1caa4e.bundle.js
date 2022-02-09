"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[7681],{83025:(e,n,o)=>{o.r(n),o.d(n,{default:()=>t});const t='---\ntitle: Knative &mdash; First Service\nlayout:\n    1: left\n    default: wizard\nwizard:\n    steps:\n        - match: Deploying your first Knative Service\n          name: Introduction\n        - "Knative Service: \\"Hello world!\\""\n        - Ping your Knative Service\n---\n\n[![Knative logo](https://knative.dev/docs/images/logo/rgb/knative-logo-rgb.png)](https://knative.dev)\n\n# Knative\n\n[Knative](https://knative.dev) is enterprise-grade Serverless on\nyour own terms, a Kubernetes-based platform to deploy and manage\nmodern serverless workloads.\n\nKnative components build on top of\n[Kubernetes](https://kubernetes.io/), abstracting away the complex\ndetails and enabling developers to focus on what matters. Built by\ncodifying the best practices shared by successful real-world\nimplementations, Knative solves the "boring but difficult" parts of\ndeploying and managing cloud native services so you don\'t have to.\n\n\x3c!-- oof, there is no great way of using markdown to specify a desired image size --\x3e\n\n<a href="https://github.com/knative">\n  <img alt="Github Logo" src="https://avatars.githubusercontent.com/u/26377421?v=4" width="40">\n</a>\n\n---\n\n## How to Deploy a Knative Service\n\n---\n\n# Deploying your first Knative Service\n\n**In this tutorial, you will deploy a "Hello world" service.**\n\nThis service will accept an environment variable, `TARGET`, and print "`Hello ${TARGET}!`."\n\nSince our "Hello world" Service is being deployed as a Knative Service, not a Kubernetes Service, it gets some **super powers out of the box** :rocket:.\n\n## Knative Service: "Hello world!"\n=== "kn"\n\n    ``` bash\n    kn service create hello \\\n    --image gcr.io/knative-samples/helloworld-go \\\n    --port 8080 \\\n    --env TARGET=World \\\n    --revision-name=world\n    ```\n\n    ??? question "Why did I pass in `revision-name`?"\n        Note the name "world" which you passed in as "revision-name," naming your `Revisions` will help you to more easily identify them, but don\'t worry, you\'ll learn more about `Revisions` later.\n\n    ==**Expected output:**==\n    ```{ .bash .no-copy }\n    Service hello created to latest revision \'hello-world\' is available at URL:\n    http://hello.default.127.0.0.1.sslip.io\n    ```\n\n=== "YAML"\n\n    ``` bash\n    apiVersion: serving.knative.dev/v1\n    kind: Service\n    metadata:\n      name: hello\n    spec:\n      template:\n        metadata:\n          # This is the name of our new "Revision," it must follow the convention {service-name}-{revision-name}\n          name: hello-world\n        spec:\n          containers:\n            - image: gcr.io/knative-samples/helloworld-go\n              ports:\n                - containerPort: 8080\n              env:\n                - name: TARGET\n                  value: "World"\n    ```\n    Once you\'ve created your YAML file (named something like "hello.yaml"):\n    ``` bash\n    kubectl apply -f hello.yaml\n    ```\n    ??? question "Why did I pass in the second name, `hello-world`?"\n        Note the name "hello-world" which you passed in under "metadata" in your YAML file. Naming your `Revisions` will help you to more easily identify them, but don\'t worry if this if a bit confusing now, you\'ll learn more about `Revisions` later.\n\n    ==**Expected output:**==\n    ```{ .bash .no-copy }\n    service.serving.knative.dev/hello created\n    ```\n\n    To see the URL where your Knative Service is hosted, leverage the `kn` CLI:\n    ```bash\n    kn service list\n    ```\n## Ping your Knative Service\nPing your Knative Service by opening [http://hello.default.127.0.0.1.sslip.io](http://hello.default.127.0.0.1.sslip.io){target=_blank} in your browser of choice or by running the command:\n\n```\ncurl http://hello.default.127.0.0.1.sslip.io\n```\n\n\n==**Expected output:**==\n```{ .bash .no-copy }\nHello World!\n```\n\n??? question "Are you seeing `curl: (6) Could not resolve host: hello.default.127.0.0.1.sslip.io`?"\n\n    In some cases your DNS server may be set up not to resolve `*.sslip.io` addresses. If you encounter this problem, it can be fixed by using a different nameserver to resolve these addresses.\n\n    The exact steps will differ according to your distribution. For example, with Ubuntu derived systems which use `systemd-resolved`, you can add the following entry to the `/etc/systemd/resolved.conf`:\n\n    ```ini\n    [Resolve]\n    DNS=8.8.8.8\n    Domains=~sslip.io.\n    ```\n\n    Then simply restart the service with `sudo service systemd-resolved restart`.\n\n    For MacOS users, you can add the DNS and domain using the network settings as explained [here](https://support.apple.com/en-gb/guide/mac-help/mh14127/mac).\n\nCongratulations :tada:, you\'ve just created your first Knative Service. Up next, Autoscaling!\n'}}]);