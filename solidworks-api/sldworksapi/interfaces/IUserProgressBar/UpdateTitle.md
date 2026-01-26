---
type: method
interface: IUserProgressBar
member: UpdateTitle
returns: System.Boolean
parameters:
  -
    name: ProgressBarTitle
    type: System.String
    description: New title of progress indicator
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - updatetitle
  - iuserprogressbar
  - user
  - progress
  - bar
  - update
  - title
  - string
  - boolean
---

# IUserProgressBar.UpdateTitle

Changes the title of the progress indicator.

## Signature

```csharp
System.Boolean UpdateTitle( 
   System.String
ProgressBarTitle
)
```
## Parameters

- `ProgressBarTitle` (System.String): New title of progress indicator

## Return Value

True if title successfully updated, false if not

## Examples

- IUserProgressBar (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserProgressBar)