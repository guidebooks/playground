"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[47149],{34264:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r='---\ntitle: Iter8 &mdash; Getting Started\nlayout: wizard\n---\n\n# Iter8: Kubernetes Release Engineering\n\n[Iter8](https://iter8.tools) is the **release engineering** platform\nfor Kubernetes applications and ML models.\n\nIter8 is designed for DevOps and MLOps teams interested in maximizing\nrelease velocity and business value with their apps/ML models while\nprotecting end-user experience. Use Iter8 for SLO validation, A/B\ntesting and progressive rollouts of K8s apps/ML models.\n\n---\n\n## Introduction\n\nThis tutorial uses an [Iter8 experiment](concepts.md#what-is-an-iter8-experiment) to load test https://example.com and validate latency and error-related service level objectives (SLOs).\n\n> ### What is an Iter8 experiment?\n>\n> An Iter8 experiment is a sequence of tasks that produce metrics-driven insights for your app/ML model versions, validates them, and optionally performs a rollout. Iter8 provides a set of pre-defined and customizable tasks.\n\n---\n\n## Install the CLI: The iter8 CLI gives you an easy way to manage your experiments\n\n=== "Mac"\n\n    On macOS, [Homebrew](https://brew.sh) makes it easy to install the `iter8` CLI.\n\n    ```shell\n    ---\n    id: install-iter8-cli\n    validate: brew info iter8\n    ---\n    brew tap iter8-tools/iter8\n    brew install iter8\n    ```\n    \n=== "Go 1.16+"\n    Install Iter8 using [Go 1.16+](https://golang.org/) as follows.\n\n    ```shell\n    ---\n    id: install-iter8-cli\n    before: export PATH=~/${GOPATH-~/go}/bin:$PATH\n    validate: iter8 -v\n    ---\n    go install github.com/iter8-tools/iter8@latest\n    ```\n\n=== "Binaries"\n    Pre-compiled Iter8 binaries for many platforms are available [here](https://github.com/iter8-tools/iter8/releases). Uncompress the iter8-X-Y.tar.gz archive for your platform, and move the iter8 binary to any folder in your PATH.\n\n---\n\n## Download experiment: You may craft an experiment by hand, or, as we do here, you may use iter8 to download a previously constructed experiment definition\n\nDownload the `load-test` experiment folder from [Iter8 hub](../user-guide/topics/iter8hub.md) as follows.\n\n```shell\n---\nid: download-load-test\nvalidate: "[[ -f /tmp/load-test/values.yaml ]] && [[ -f /tmp/load-test/Chart.yaml ]] || exit 1"\nstatus: done\n---\ncd /tmp && iter8 hub -e load-test\n```\n\n---\n\n## Run experiment: Run load against the application, and monitor error rate and response time\n\n[Iter8 experiments](concepts.md#what-is-an-iter8-experiment) are specified using the `experiment.yaml` file. The `iter8 run` command reads this file, runs the specified experiment, and writes the results of the experiment into the `result.yaml` file.\n\nRun the experiment you downloaded above as follows.\n\n```shell\n---\nid: run-experiment\nvalidate: "[[ -f /tmp/load-test/experiment/values.yaml ]] || exit 1"\n---\ncd /tmp/load-test && iter8 run --set url=https://example.com\n```\n\n??? note "Look inside experiment.yaml"\n\n    This experiment contains the [`gen-load-and-collect-metrics` task](../user-guide/tasks/collect.md) for generating load and collecting metrics, and the [`assess-app-versions` task](../user-guide/tasks/assess.md) for validating SLOs.\n\n    ```yaml\n    # task 1: generate HTTP requests for https://example.com and\n    # collect Iter8\'s built-in latency and error-related metrics\n    - task: gen-load-and-collect-metrics\n      with:\n        versionInfo:\n        - url: https://example.com\n    # task 2: validate if the app (hosted at https://example.com) satisfies \n    # service level objectives (SLOs)\n    # this task uses the built-in metrics collected by task 1 for validation\n    - task: assess-app-versions\n      with:\n        SLOs:\n          # error rate must be 0\n        - metric: built-in/error-rate\n          upperLimit: 0\n          # 95th percentile latency must be under 100 msec\n        - metric: built-in/p95.0\n          upperLimit: 100\n    ```\n\n??? note "Iter8 and Helm"\n\n    If you are familiar with Helm, you probably noticed that the load-test folder resembles a Helm chart. This is because, Iter8 experiment charts are Helm charts under the covers. The iter8 run command used above combines the experiment chart with values to generate the experiments.yaml file, much like how Helm charts can be combined with values to produce Kubernetes manifests.\n\n## Assert outcomes\n\nAssert that the experiment completed without any failures and SLOs are satisfied\n\n```shell\n---\nid: assert-success\n---\ncd /tmp/load-test && iter8 assert -c completed -c nofailure -c slos\n```\n\n## Generate report\n\nGenerate a report of the experiment in HTML or text formats as follows.\n\n=== "HTML"\n\n    ```shell\n    iter8 report -o html > report.html\n    # open report.html with a browser. In MacOS, you can use the command:\n    # open report.html\n    ```\n\n    ???+ note "The HTML report looks as follows"\n\n        ![HTML report](https://iter8.tools/0.8/getting-started/images/report.html.png)\n\n=== "Text"\n\n    ```shell\n    ---\n    id: generate-text-report\n    ---\n    cd /tmp/load-test && iter8 report -o text\n    ```\n'}}]);