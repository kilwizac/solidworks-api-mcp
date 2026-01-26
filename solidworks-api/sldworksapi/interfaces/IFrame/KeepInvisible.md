---
type: property
interface: IFrame
member: KeepInvisible
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ISldWorks.UserControl
  - ISldWorks.UserControlBackground
  - ISldWorks.Visible
keywords:
  - keepinvisible
  - iframe
  - frame
  - keep
  - invisible
  - boolean
  - solidworks
  - while
  - activating
  - documents
  - vb
  - net
  - vba
readonly: null
---

# IFrame.KeepInvisible

Gets or sets whether to keep the SOLIDWORKS frame invisible.

## Signature

```csharp
System.Boolean KeepInvisible {get; set;}
```
## Parameters

None.

## Return Value

True to keep the SOLIDWORKS frame invisible, false to keep it visible

## Remarks

Use this property when SOLIDWORKS is
invisible
and you want to
activate
a component and prevent SOLIDWORKS from becoming visible. Be sure to set this property back to false after the operation for which you set it to true completes.

## Examples

- Keep SOLIDWORKS Invisible While Activating Documents (C#) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_CSharp.htm)
- Keep SOLIDWORKS Invisible While Activating Documents (VB.NET) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_VBNET.htm)
- Keep SOLIDWORKS Invisible While Activating Documents (VBA) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_VB.htm)

## See Also

- `ISldWorks.UserControl`
- `ISldWorks.UserControlBackground`
- `ISldWorks.Visible`