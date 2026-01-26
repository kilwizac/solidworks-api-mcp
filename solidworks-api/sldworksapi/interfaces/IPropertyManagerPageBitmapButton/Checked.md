---
type: property
interface: IPropertyManagerPageBitmapButton
member: Checked
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageBitmapButton.IsCheckable
keywords:
  - checked
  - ipropertymanagerpagebitmapbutton
  - manager
  - page
  - bitmap
  - button
  - boolean
readonly: null
---

# IPropertyManagerPageBitmapButton.Checked

Gets or sets the state of the bitmap button.

## Signature

```csharp
System.Boolean Checked {get; set;}
```
## Parameters

None.

## Return Value

True if bitmap button is clicked, false if not

## Remarks

This property is only meaningful and used by the SOLIDWORKS Design application when the bitmap button control is of type swControlType_CheckableBitmapButton.
You can create a bitmap button control using either of these methods:
IPropertyManagerPage2::AddControl
or
IPropertyManagerPage2::IAddControl
IPropertyManagerPageGroup::AddControl
or
IPropertyManagerPageGroup::IAddControl

## See Also

- `IPropertyManagerPageBitmapButton.IsCheckable`