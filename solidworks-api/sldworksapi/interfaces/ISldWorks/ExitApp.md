---
type: method
interface: ISldWorks
member: ExitApp
returns: void
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
  - close
  - solidworks
  - exit
  - exitapp
  - isldworks
  - sld
  - works
  - app
  - void
---

# ISldWorks.ExitApp

Shuts down SOLIDWORKS Design.

## Signature

```csharp
void ExitApp()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method is not normally used with macros (*.swp) because it shuts down your SOLIDWORKS Design session.
For C++ and Visual Basic projects, ending your program does not guarantee that the SLDWORKS processes are closed. During development, you can determine whether processes are left running by checking the Process Viewer and looking for any SLDWORKS processes. Typically, you do not want the SLDWORKS process running after your program has ended. Calling this method ensures that no SLDWORKS processes are left running when your program ends.
However, the CreateObject ("SldWorks.Application") statement used to start up the SOLIDWORKS Design software either creates a new SOLIDWORKS Design session or it attaches to an existing SOLIDWORKS Design session. If the end-user currently has an open SOLIDWORKS Design session, then your program attaches to it. Performing this method ends that session.