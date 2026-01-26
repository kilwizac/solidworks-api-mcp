---
type: property
interface: ISldWorks
member: UserControlBackground
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IFrame.KeepInvisible
  - ISldWorks.UserControl
  - ISldWorks.Visible
keywords:
  - control
  - solidworks
  - usercontrolbackground
  - isldworks
  - sld
  - works
  - user
  - background
  - boolean
readonly: null
---

# ISldWorks.UserControlBackground

Gets and sets whether the user has control over the application.

## Signature

```csharp
System.Boolean UserControlBackground {get; set;}
```
## Parameters

None.

## Return Value

True if the user has control over the application, false if not (see Remarks )

## Remarks

Setting this property to true causes the SOLIDWORKS Design application to run in the background and not be visible. Use
ISldWorks::UserControl
if you want to run the SOLIDWORKS Design application in the foreground and be visible.

## See Also

- `IFrame.KeepInvisible`
- `ISldWorks.UserControl`
- `ISldWorks.Visible`