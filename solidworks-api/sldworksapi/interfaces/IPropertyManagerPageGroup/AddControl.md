---
type: property
interface: IPropertyManagerPageGroup
member: AddControl
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: Resource ID of the control
  -
    name: ControlType
    type: System.Int16
    description: Type of control as defined in swPropertyManagerPageControlType_e
  -
    name: Caption
    type: System.String
    description: Caption of the control
  -
    name: LeftAlign
    type: System.Int16
    description: Left align property of this control as defined in swPropertyManagerPageControlLeftAlign_e
  -
    name: Options
    type: System.Int32
    description: Options as defined in swAddControlOptions_e
  -
    name: Tip
    type: System.String
    description: ToolTip text for the control
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageGroup.IAddControl
keywords:
  - addcontrol
  - ipropertymanagerpagegroup
  - manager
  - page
  - group
  - add
  - control
  - id
  - int32
  - type
  - int16
  - caption
  - string
  - left
  - align
  - options
  - tip
  - object
readonly: null
---

# IPropertyManagerPageGroup.AddControl

Obsolete. Superseded by IPropertyManagerpageGroup::AddControl2.

## Signature

```csharp
System.Object AddControl( 
   System.Int32
ID
,
   System.Int16
ControlType
,
   System.String
Caption
,
   System.Int16
LeftAlign
,
   System.Int32
Options
,
   System.String
Tip
)
```
## Parameters

- `ID` (System.Int32): Resource ID of the control
- `ControlType` (System.Int16): Type of control as defined in swPropertyManagerPageControlType_e
- `Caption` (System.String): Caption of the control
- `LeftAlign` (System.Int16): Left align property of this control as defined in swPropertyManagerPageControlLeftAlign_e
- `Options` (System.Int32): Options as defined in swAddControlOptions_e
- `Tip` (System.String): ToolTip text for the control

## Return Value

Newly created control for this PropertyManager page group box

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
When you specify swControlOptions_SmallGapAbove for the Options parameter, gap is used between a new control and the previous control that is smaller than the typical gap.

## See Also

- `IPropertyManagerPageGroup.IAddControl`