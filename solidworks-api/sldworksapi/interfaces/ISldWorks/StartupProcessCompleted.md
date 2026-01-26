---
type: property
interface: ISldWorks
member: StartupProcessCompleted
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
  - add
  - ins
  - solidworks
  - startup
  - process
  - applications
  - out
  - startupprocesscompleted
  - isldworks
  - sld
  - works
  - completed
  - boolean
readonly: true
---

# ISldWorks.StartupProcessCompleted

Gets whether the SOLIDWORKS startup process, including loading all startup add-ins, has completed.

## Signature

```csharp
System.Boolean StartupProcessCompleted {get;}
```
## Parameters

None.

## Return Value

True if the SOLIDWORKS startup process, including loading all startup add-ins, has completed, false if not (see Remarks )

## Remarks

Use this property in out-of-process add-in applications to ensure that SOLIDWORKS, including loading all startup add-ins, is ready to receive additional API calls. For example, call this property before calling
ISldWorks::OpenDoc6
in an out-of-process add-in application.