---
type: method
interface: IDrSection
member: SetLabel2
returns: System.Int32
parameters:
  -
    name: Label
    type: System.String
    description: Label for this section view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetLabel
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - labels
  - setlabel2
  - dr
  - label2
  - label
  - string
  - int32
  - create
  - view
  - some
  - data
  - vb
  - net
  - vba
---

# IDrSection.SetLabel2

Sets the label for this section view.

## Signature

```csharp
System.Int32 SetLabel2( 
   System.String
Label
)
```
## Parameters

- `Label` (System.String): Label for this section view

## Return Value

Value as defined in swSetSectionLabelStatus_e

## Remarks

If the return status...
Then the operation...
< 0
Failed
= 0
Succeeded
> 0
Succeeded. However:
If you attempt to set the section label to the same value as an existing section label and the drawing standard does allow duplicate section labels, then status = 1. That is, the label is changed, but the status indicates that the label is a duplicate, which is not allowed by the drawing standard.
If the dimensioning standard allows duplicate section labels, then status = 0.

## Examples

- Create Section View and Get Some Data (C#) (Create_Section_View_and_Get_Some_Data_Example_CSharp.htm)
- Create Section View and Get Some Data (VB.NET) (Create_Section_View_and_Get_Some_Data_Example_VBNET.htm)
- Create Section View and Get Some Data (VBA) (Create_Section_View_and_Get_Some_Data_Example_VB.htm)

## See Also

- `IDrSection.GetLabel`