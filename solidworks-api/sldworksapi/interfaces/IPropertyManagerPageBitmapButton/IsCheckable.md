---
type: property
interface: IPropertyManagerPageBitmapButton
member: IsCheckable
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageBitmapButton.Checked
keywords:
  - ischeckable
  - ipropertymanagerpagebitmapbutton
  - manager
  - page
  - bitmap
  - button
  - checkable
  - boolean
readonly: null
---

# IPropertyManagerPageBitmapButton.IsCheckable

Gets whether the bitmap button is clickable.

## Signature

```csharp
System.Boolean IsCheckable {get; set;}
```
## Parameters

None.

## Return Value

True if bitmap button is clickable, false if not

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

- `IPropertyManagerPageBitmapButton.Checked`