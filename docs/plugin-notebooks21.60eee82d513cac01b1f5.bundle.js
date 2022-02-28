"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[45586],{2625:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o="---\ntitle: Kubernetes &mdash; CRUD Operations\nlayout:\n  1: left\n---\n\n# Declarative Management in Kubernetes\n\nKubernetes objects can be created, updated, and deleted by storing\nmultiple object configuration files in a directory and using `kubectl apply` to recursively create and update those objects as needed. This\nmethod retains writes made to live objects without merging the changes\nback into the object configuration files.\n\n---\n\n## Creating Resources\n\nIt is good practice to experiment in a separate namespace. Thus, we\nfirst create a scratch namespace.\n\n```bash\n---\nvalidate: k get ns kui-notebook-1\ncleanup: k delete ns kui-notebook-1\n---\nk create ns kui-notebook-1\n```\n\nNow we can use `kubectl apply` to create a deployment in the\n`kui-notebook-1` namespace.\n\n```bash\n---\nvalidate: k get deploy myapp -n kui-notebook-1\ncleanup: k delete -f https://raw.githubusercontent.com/kubernetes-sigs/kui/master/plugins/plugin-kubectl/tests/data/k8s/deployment.yaml -n kui-notebook-1\n---\nk apply -f https://raw.githubusercontent.com/kubernetes-sigs/kui/master/plugins/plugin-kubectl/tests/data/k8s/deployment.yaml -n kui-notebook-1\n```\n\nWhen running this yourself, the `apply` table will be live, with the\n**Status** cells updating as resources become available. You may also\nclick to expand the source reference.\n\n## Inspecting Resources\n\nTo inspect the `nginx-deployment` you just applied, you can **click\nthe resource name** in the table above. Kui will then execute the\ncommand-line `kubectl get Deployment.v1.apps -n kui-notebook-1 nginx-deployment -o yaml` , so you can further inspect this deployment\nby a variety of resources, such as brief summary, last applied info,\nand a full yaml content. You can also use the following view to\nexplore the related resources and involved events of this deployment.\n\n```bash\nk get Deployment.v1.apps -n kui-notebook-1 myapp -o yaml\n```\n\nThe above drilldown view shows a set of views over the Deployment,\nsuch as a brief summary of the resource, the configuration as of the\n_previous_ call to `apply`, and the raw yaml code. You can also\nexplore related resources, such as the Pods managed by the Deployment,\nor Kubernetes events that pertain to the Deployment.\n\nClicking the edit icon allows you to modify and apply updates directly\nfrom that view. Clicking the delete icon will, with your confirmation,\nprocess a `kubectl delete` against that resource.\n"}}]);