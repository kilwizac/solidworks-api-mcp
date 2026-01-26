---
type: property
interface: IPropertyManagerPageNumberbox
member: SetRange
returns: void
parameters:
  -
    name: Units
    type: System.Int32
    description: Number box units as defined in swNumberboxUnitType_e
  -
    name: Minimum
    type: System.Double
    description: Number box minimum value
  -
    name: Maximum
    type: System.Double
    description: Number box maximum value
  -
    name: Increment
    type: System.Double
    description: Number box increment
  -
    name: Inclusive
    type: System.Boolean
    description: True sets the range as inclusive, false sets it as exclusive
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setrange
  - ipropertymanagerpagenumberbox
  - manager
  - page
  - numberbox
  - range
  - units
  - int32
  - minimum
  - double
  - maximum
  - increment
  - inclusive
  - boolean
  - void
  - cut
  - body
  - half
  - using
  - macro
  - feature
  - vba
readonly: null
---

# IPropertyManagerPageNumberbox.SetRange

Obsolete. Superseded by PropertyManagerPageNumberbox::SetRange2.

## Signature

```csharp
void SetRange( 
   System.Int32
Units
,
   System.Double
Minimum
,
   System.Double
Maximum
,
   System.Double
Increment
,
   System.Boolean
Inclusive
)
```
## Parameters

- `Units` (System.Int32): Number box units as defined in swNumberboxUnitType_e
- `Minimum` (System.Double): Number box minimum value
- `Maximum` (System.Double): Number box maximum value
- `Increment` (System.Double): Number box increment
- `Inclusive` (System.Boolean): True sets the range as inclusive, false sets it as exclusive

## Return Value

Unknown.

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IProperytManagerPage2::Close
.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)