"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[4094],{13650:e=>{e.exports=JSON.parse('[{"status":"done","response":{"header":{"name":"Name","attributes":[{"key":"STATUS","value":"Status"},{"key":"AGE","value":"Age","outerCSS":"hide-with-sidecar"}]},"body":[{"object":{"kind":"PartialObjectMetadata","apiVersion":"meta.k8s.io/v1","metadata":{"name":"kui-notebook-2","selfLink":"/api/v1/namespaces/kui-notebook-2","uid":"c90b3a60-e03b-496b-876c-a99d07bad590","resourceVersion":"8482048","creationTimestamp":"2022-01-06T00:55:45Z","managedFields":[{"manager":"kubectl-create","operation":"Update","apiVersion":"v1","time":"2022-01-06T00:55:45Z","fieldsType":"FieldsV1","fieldsV1":{"f:status":{"f:phase":{}}}}]}},"key":"NAME","rowKey":"kui-notebook-2_Namespace_undefined","name":"kui-notebook-2","onclickIdempotent":true,"onclick":"kubectl get Namespace kui-notebook-2 -o yaml  ","attributes":[{"key":"STATUS","value":"Active","tag":"badge","onclick":false,"css":" green-background  "},{"key":"AGE","value":"0s","onclick":false,"outerCSS":"hide-with-sidecar","css":"slightly-deemphasize   "}]}],"title":"Namespace","resourceVersion":"8482048"}},{"status":"done","response":{"header":{"name":"JOB","attributes":[{"key":"NAME","value":"NAME"},{"key":"STATUS","value":"STATUS"},{"key":"START","value":"START"},{"key":"START2","value":"START2","outerCSS":"hide"},{"key":"END","value":"END"},{"key":"Duration","value":"Duration"},{"key":"Cold Start","value":"Cold Start","outerCSS":"hide-with-sidecar"}]},"body":[{"key":"JOB","rowKey":"pi-f9qqg_Pod_kui-notebook-2","name":"pi","attributes":[{"key":"NAME","value":"pi-f9qqg","outerCSS":"entity-name-group","css":"entity-name   "},{"key":"STATUS","value":"Pending","tag":"badge","css":" yellow-background  "},{"key":"START","value":"2022-01-06T00:55:48Z","css":"   "},{"key":"START2","outerCSS":"hide","css":"   "},{"key":"END","css":"   "},{"key":"Duration","value":""},{"key":"Cold Start","value":"","outerCSS":"hide-with-sidecar"}],"onclick":"kubectl get Pod pi-f9qqg -o yaml -n kui-notebook-2 "},{"key":"JOB","rowKey":"pi-xdkxh_Pod_kui-notebook-2","name":"pi","attributes":[{"key":"NAME","value":"pi-xdkxh","outerCSS":"entity-name-group","css":"entity-name   "},{"key":"STATUS","value":"Pending","tag":"badge","css":" yellow-background  "},{"key":"START","value":"2022-01-06T00:55:48Z","css":"   "},{"key":"START2","outerCSS":"hide","css":"   "},{"key":"END","css":"   "},{"key":"Duration","value":""},{"key":"Cold Start","value":"","outerCSS":"hide-with-sidecar"}],"onclick":"kubectl get Pod pi-xdkxh -o yaml -n kui-notebook-2 "},{"key":"JOB","rowKey":"pi-z6zvk_Pod_kui-notebook-2","name":"pi","attributes":[{"key":"NAME","value":"pi-z6zvk","outerCSS":"entity-name-group","css":"entity-name   "},{"key":"STATUS","value":"Pending","tag":"badge","css":" yellow-background  "},{"key":"START","value":"2022-01-06T00:55:48Z","css":"   "},{"key":"START2","outerCSS":"hide","css":"   "},{"key":"END","css":"   "},{"key":"Duration","value":""},{"key":"Cold Start","value":"","outerCSS":"hide-with-sidecar"}],"onclick":"kubectl get Pod pi-z6zvk -o yaml -n kui-notebook-2 "},{"key":"JOB","rowKey":"pi-qrmjb_Pod_kui-notebook-2","name":"pi","attributes":[{"key":"NAME","value":"pi-qrmjb","outerCSS":"entity-name-group","css":"entity-name   "},{"key":"STATUS","value":"Pending","tag":"badge","css":" yellow-background  "},{"key":"START","value":"2022-01-06T00:55:48Z","css":"   "},{"key":"START2","outerCSS":"hide","css":"   "},{"key":"END","css":"   "},{"key":"Duration","value":""},{"key":"Cold Start","value":"","outerCSS":"hide-with-sidecar"}],"onclick":"kubectl get Pod pi-qrmjb -o yaml -n kui-notebook-2 "}],"resourceVersion":"8482065","statusColumnIdx":1,"startColumnIdx":2,"completeColumnIdx":4,"durationColumnIdx":5,"coldStartColumnIdx":6,"title":"Job","footer":["[[0s]](#kuiexec?command=kubectl%20get%20event%20pi-f9qqg.16c788630d3ff38c%20-o%20yaml%20%20-n%20kui-notebook-2%20) **pod/pi-f9qqg**: Successfully assigned kui-notebook-2/pi-f9qqg to docker-desktop","[[0s]](#kuiexec?command=kubectl%20get%20event%20pi-qrmjb.16c788630f5f1f1c%20-o%20yaml%20%20-n%20kui-notebook-2%20) **pod/pi-qrmjb**: Successfully assigned kui-notebook-2/pi-qrmjb to docker-desktop","[[0s]](#kuiexec?command=kubectl%20get%20event%20pi-xdkxh.16c788630e6980fc%20-o%20yaml%20%20-n%20kui-notebook-2%20) **pod/pi-xdkxh**: Successfully assigned kui-notebook-2/pi-xdkxh to docker-desktop","[[0s]](#kuiexec?command=kubectl%20get%20event%20pi-z6zvk.16c788630adb2c10%20-o%20yaml%20%20-n%20kui-notebook-2%20) **pod/pi-z6zvk**: Successfully assigned kui-notebook-2/pi-z6zvk to docker-desktop","[[0s]](#kuiexec?command=kubectl%20get%20event%20pi-z6zvk.16c788636aad4bc8%20-o%20yaml%20%20-n%20kui-notebook-2%20) **pod/pi-z6zvk**: Pulling image \\"quay.io/biocontainers/perl-io-all\\"","[[0s]](#kuiexec?command=kubectl%20get%20event%20pi-qrmjb.16c788636df78528%20-o%20yaml%20%20-n%20kui-notebook-2%20) **pod/pi-qrmjb**: Pulling image \\"quay.io/biocontainers/perl-io-all\\"","[[0s]](#kuiexec?command=kubectl%20get%20event%20pi-f9qqg.16c788636e3488b0%20-o%20yaml%20%20-n%20kui-notebook-2%20) **pod/pi-f9qqg**: Pulling image \\"quay.io/biocontainers/perl-io-all\\"","[[0s]](#kuiexec?command=kubectl%20get%20event%20pi-xdkxh.16c788636ecb0740%20-o%20yaml%20%20-n%20kui-notebook-2%20) **pod/pi-xdkxh**: Pulling image \\"quay.io/biocontainers/perl-io-all\\""]}},{"status":"done","response":{"kind":"Pod","apiVersion":"v1","metadata":{"name":"pi-f9qqg","generateName":"pi-","namespace":"kui-notebook-2","selfLink":"/api/v1/namespaces/kui-notebook-2/pods/pi-f9qqg","uid":"c99cb1e3-9d24-4fa9-ab75-fff66a770a3f","resourceVersion":"8482078","creationTimestamp":"2022-01-06T00:55:48Z","labels":{"controller-uid":"f0c92a4a-0592-4253-bff8-961c8860b7b6","job-name":"pi"},"ownerReferences":[{"apiVersion":"batch/v1","kind":"Job","name":"pi","uid":"f0c92a4a-0592-4253-bff8-961c8860b7b6","controller":true,"blockOwnerDeletion":true}],"managedFields":[{"manager":"kube-controller-manager","operation":"Update","apiVersion":"v1","time":"2022-01-06T00:55:48Z","fieldsType":"FieldsV1","fieldsV1":{"f:metadata":{"f:generateName":{},"f:labels":{".":{},"f:controller-uid":{},"f:job-name":{}},"f:ownerReferences":{".":{},"k:{\\"uid\\":\\"f0c92a4a-0592-4253-bff8-961c8860b7b6\\"}":{".":{},"f:apiVersion":{},"f:blockOwnerDeletion":{},"f:controller":{},"f:kind":{},"f:name":{},"f:uid":{}}}},"f:spec":{"f:containers":{"k:{\\"name\\":\\"pi\\"}":{".":{},"f:command":{},"f:image":{},"f:imagePullPolicy":{},"f:name":{},"f:resources":{},"f:terminationMessagePath":{},"f:terminationMessagePolicy":{}}},"f:dnsPolicy":{},"f:enableServiceLinks":{},"f:restartPolicy":{},"f:schedulerName":{},"f:securityContext":{},"f:terminationGracePeriodSeconds":{}}}},{"manager":"kubelet","operation":"Update","apiVersion":"v1","time":"2022-01-06T00:55:48Z","fieldsType":"FieldsV1","fieldsV1":{"f:status":{"f:conditions":{"k:{\\"type\\":\\"ContainersReady\\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:message":{},"f:reason":{},"f:status":{},"f:type":{}},"k:{\\"type\\":\\"Initialized\\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:status":{},"f:type":{}},"k:{\\"type\\":\\"Ready\\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:message":{},"f:reason":{},"f:status":{},"f:type":{}}},"f:containerStatuses":{},"f:hostIP":{},"f:startTime":{}}}}]},"spec":{"volumes":[{"name":"default-token-twzrq","secret":{"secretName":"default-token-twzrq","defaultMode":420}}],"containers":[{"name":"pi","image":"quay.io/biocontainers/perl-io-all","command":["perl","-Mbignum=bpi","-wle","print bpi(2000)"],"resources":{},"volumeMounts":[{"name":"default-token-twzrq","readOnly":true,"mountPath":"/var/run/secrets/kubernetes.io/serviceaccount"}],"terminationMessagePath":"/dev/termination-log","terminationMessagePolicy":"File","imagePullPolicy":"Always"}],"restartPolicy":"Never","terminationGracePeriodSeconds":30,"dnsPolicy":"ClusterFirst","serviceAccountName":"default","serviceAccount":"default","nodeName":"docker-desktop","securityContext":{},"schedulerName":"default-scheduler","tolerations":[{"key":"node.kubernetes.io/not-ready","operator":"Exists","effect":"NoExecute","tolerationSeconds":300},{"key":"node.kubernetes.io/unreachable","operator":"Exists","effect":"NoExecute","tolerationSeconds":300}],"priority":0,"enableServiceLinks":true,"preemptionPolicy":"PreemptLowerPriority"},"status":{"phase":"Pending","conditions":[{"type":"Initialized","status":"True","lastProbeTime":null,"lastTransitionTime":"2022-01-06T00:55:48Z"},{"type":"Ready","status":"False","lastProbeTime":null,"lastTransitionTime":"2022-01-06T00:55:48Z","reason":"ContainersNotReady","message":"containers with unready status: [pi]"},{"type":"ContainersReady","status":"False","lastProbeTime":null,"lastTransitionTime":"2022-01-06T00:55:48Z","reason":"ContainersNotReady","message":"containers with unready status: [pi]"},{"type":"PodScheduled","status":"True","lastProbeTime":null,"lastTransitionTime":"2022-01-06T00:55:48Z"}],"hostIP":"192.168.65.4","startTime":"2022-01-06T00:55:48Z","containerStatuses":[{"name":"pi","state":{"waiting":{"reason":"ContainerCreating"}},"lastState":{},"ready":false,"restartCount":0,"image":"quay.io/biocontainers/perl-io-all","imageID":"","started":false}],"qosClass":"BestEffort"},"isKubeResource":true,"originatingCommand":{"REPL":{},"argv":["kubectl","get","Pod","pi-f9qqg","-o","yaml","-n","kui-notebook-2"],"command":"kubectl get Pod pi-f9qqg -o yaml -n kui-notebook-2","execOptions":{"echo":false,"type":1,"noHistory":true,"execUUID":"8a8cb8db-17df-47e1-b056-c1a181418f0d","env":{}},"argvNoOptions":["kubectl","get","Pod","pi-f9qqg"],"pipeStages":{"prefix":"","stages":[["kubectl","get","Pod","pi-f9qqg","-o","yaml","-n","kui-notebook-2"]],"redirect":""},"parsedOptions":{"_":["kubectl","get","Pod","pi-f9qqg"],"o":"yaml","n":"kui-notebook-2"}},"kuiRawData":"kind: Pod\\napiVersion: v1\\nmetadata:\\n  name: pi-f9qqg\\n  generateName: pi-\\n  namespace: kui-notebook-2\\n  selfLink: /api/v1/namespaces/kui-notebook-2/pods/pi-f9qqg\\n  uid: c99cb1e3-9d24-4fa9-ab75-fff66a770a3f\\n  resourceVersion: \'8482078\'\\n  creationTimestamp: \'2022-01-06T00:55:48Z\'\\n  labels:\\n    controller-uid: f0c92a4a-0592-4253-bff8-961c8860b7b6\\n    job-name: pi\\n  ownerReferences:\\n    - apiVersion: batch/v1\\n      kind: Job\\n      name: pi\\n      uid: f0c92a4a-0592-4253-bff8-961c8860b7b6\\n      controller: true\\n      blockOwnerDeletion: true\\n  managedFields:\\n    - manager: kube-controller-manager\\n      operation: Update\\n      apiVersion: v1\\n      time: \'2022-01-06T00:55:48Z\'\\n      fieldsType: FieldsV1\\n      fieldsV1:\\n        f:metadata:\\n          f:generateName: {}\\n          f:labels:\\n            .: {}\\n            f:controller-uid: {}\\n            f:job-name: {}\\n          f:ownerReferences:\\n            .: {}\\n            k:{\\"uid\\":\\"f0c92a4a-0592-4253-bff8-961c8860b7b6\\"}:\\n              .: {}\\n              f:apiVersion: {}\\n              f:blockOwnerDeletion: {}\\n              f:controller: {}\\n              f:kind: {}\\n              f:name: {}\\n              f:uid: {}\\n        f:spec:\\n          f:containers:\\n            k:{\\"name\\":\\"pi\\"}:\\n              .: {}\\n              f:command: {}\\n              f:image: {}\\n              f:imagePullPolicy: {}\\n              f:name: {}\\n              f:resources: {}\\n              f:terminationMessagePath: {}\\n              f:terminationMessagePolicy: {}\\n          f:dnsPolicy: {}\\n          f:enableServiceLinks: {}\\n          f:restartPolicy: {}\\n          f:schedulerName: {}\\n          f:securityContext: {}\\n          f:terminationGracePeriodSeconds: {}\\n    - manager: kubelet\\n      operation: Update\\n      apiVersion: v1\\n      time: \'2022-01-06T00:55:48Z\'\\n      fieldsType: FieldsV1\\n      fieldsV1:\\n        f:status:\\n          f:conditions:\\n            k:{\\"type\\":\\"ContainersReady\\"}:\\n              .: {}\\n              f:lastProbeTime: {}\\n              f:lastTransitionTime: {}\\n              f:message: {}\\n              f:reason: {}\\n              f:status: {}\\n              f:type: {}\\n            k:{\\"type\\":\\"Initialized\\"}:\\n              .: {}\\n              f:lastProbeTime: {}\\n              f:lastTransitionTime: {}\\n              f:status: {}\\n              f:type: {}\\n            k:{\\"type\\":\\"Ready\\"}:\\n              .: {}\\n              f:lastProbeTime: {}\\n              f:lastTransitionTime: {}\\n              f:message: {}\\n              f:reason: {}\\n              f:status: {}\\n              f:type: {}\\n          f:containerStatuses: {}\\n          f:hostIP: {}\\n          f:startTime: {}\\nspec:\\n  volumes:\\n    - name: default-token-twzrq\\n      secret:\\n        secretName: default-token-twzrq\\n        defaultMode: 420\\n  containers:\\n    - name: pi\\n      image: quay.io/biocontainers/perl-io-all\\n      command:\\n        - perl\\n        - \'-Mbignum=bpi\'\\n        - \'-wle\'\\n        - print bpi(2000)\\n      resources: {}\\n      volumeMounts:\\n        - name: default-token-twzrq\\n          readOnly: true\\n          mountPath: /var/run/secrets/kubernetes.io/serviceaccount\\n      terminationMessagePath: /dev/termination-log\\n      terminationMessagePolicy: File\\n      imagePullPolicy: Always\\n  restartPolicy: Never\\n  terminationGracePeriodSeconds: 30\\n  dnsPolicy: ClusterFirst\\n  serviceAccountName: default\\n  serviceAccount: default\\n  nodeName: docker-desktop\\n  securityContext: {}\\n  schedulerName: default-scheduler\\n  tolerations:\\n    - key: node.kubernetes.io/not-ready\\n      operator: Exists\\n      effect: NoExecute\\n      tolerationSeconds: 300\\n    - key: node.kubernetes.io/unreachable\\n      operator: Exists\\n      effect: NoExecute\\n      tolerationSeconds: 300\\n  priority: 0\\n  enableServiceLinks: true\\n  preemptionPolicy: PreemptLowerPriority\\nstatus:\\n  phase: Pending\\n  conditions:\\n    - type: Initialized\\n      status: \'True\'\\n      lastProbeTime: null\\n      lastTransitionTime: \'2022-01-06T00:55:48Z\'\\n    - type: Ready\\n      status: \'False\'\\n      lastProbeTime: null\\n      lastTransitionTime: \'2022-01-06T00:55:48Z\'\\n      reason: ContainersNotReady\\n      message: \'containers with unready status: [pi]\'\\n    - type: ContainersReady\\n      status: \'False\'\\n      lastProbeTime: null\\n      lastTransitionTime: \'2022-01-06T00:55:48Z\'\\n      reason: ContainersNotReady\\n      message: \'containers with unready status: [pi]\'\\n    - type: PodScheduled\\n      status: \'True\'\\n      lastProbeTime: null\\n      lastTransitionTime: \'2022-01-06T00:55:48Z\'\\n  hostIP: 192.168.65.4\\n  startTime: \'2022-01-06T00:55:48Z\'\\n  containerStatuses:\\n    - name: pi\\n      state:\\n        waiting:\\n          reason: ContainerCreating\\n      lastState: {}\\n      ready: false\\n      restartCount: 0\\n      image: quay.io/biocontainers/perl-io-all\\n      imageID: \'\'\\n      started: false\\n  qosClass: BestEffort\\n","toolbarText":{"type":"info","text":"Created on **1/5/2022, 7:55:48 PM**. Version **8482078**."},"onclick":{"kind":"kubectl get Pod -n kui-notebook-2","name":"kubectl get Pod -n kui-notebook-2 pi-f9qqg","namespace":"kubectl get ns kui-notebook-2 -o yaml"},"defaultMode":"diff","modes":[]}}]')}}]);