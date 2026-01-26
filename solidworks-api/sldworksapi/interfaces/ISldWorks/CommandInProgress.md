---
type: property
interface: ISldWorks
member: CommandInProgress
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - performance
  - commandinprogress
  - isldworks
  - sld
  - works
  - command
  - progress
  - boolean
readonly: null
---

# ISldWorks.CommandInProgress

Improves performance of out-of-process applications by informing SOLIDWORKS that a sequence of API calls will be made by the out-of-process application.

## Signature

```csharp
System.Boolean CommandInProgress {get; set;}
```
## Parameters

None.

## Return Value

Set to True before calling the sequence of API calls, then set to false after calling the sequence of API calls

## Remarks

SOLIDWORKS then reduces the number of updates it makes during these calls.
Use of this property only effects out-of-process applications.