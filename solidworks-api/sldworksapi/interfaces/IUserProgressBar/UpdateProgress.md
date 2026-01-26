---
type: method
interface: IUserProgressBar
member: UpdateProgress
returns: System.Int32
parameters:
  -
    name: Position
    type: System.Int32
    description: New position of the progress indicator
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - updateprogress
  - iuserprogressbar
  - user
  - progress
  - bar
  - update
  - position
  - int32
---

# IUserProgressBar.UpdateProgress

Increments the progress indicator.

## Signature

```csharp
System.Int32 UpdateProgress( 
   System.Int32
Position
)
```
## Parameters

- `Position` (System.Int32): New position of the progress indicator

## Return Value

Status of progress indicator update as defined in swUpdateProgressError_e

## Examples

- IUserProgressBar (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserProgressBar)