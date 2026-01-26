---
type: property
interface: IMassPropertyOverrideOptions
member: SetOverrideMomentsOfInertiaValue
returns: System.Boolean
parameters:
  -
    name: ReferenceFrame
    type: System.Int32
    description: Frame of reference as defined in swMomentsOfInertiaReferenceFrame_e
  -
    name: Value
    type: System.Object
    description: Array of nine doubles: [ Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz ]
  -
    name: CoordinateSystemName
    type: System.String
    description: Name of coordinate system; valid only if ReferenceFrame = swMomentsOfInertiaReferenceFrame_e.swMomentsOfInertiaReferenceFrame_UserCoordinateSystem
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.GetMomentOfInertia
keywords:
  - setoverridemomentsofinertiavalue
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - moments
  - inertia
  - value
  - reference
  - frame
  - int32
  - object
  - coordinate
  - name
  - string
  - boolean
  - imassproperty2
readonly: null
---

# IMassPropertyOverrideOptions.SetOverrideMomentsOfInertiaValue

Overrides the calculated moments of inertia of the model currently being edited.

## Signature

```csharp
System.Boolean SetOverrideMomentsOfInertiaValue( 
   System.Int32
ReferenceFrame
,
   System.Object
Value
,
   System.String
CoordinateSystemName
)
```
## Parameters

- `ReferenceFrame` (System.Int32): Frame of reference as defined in swMomentsOfInertiaReferenceFrame_e
- `Value` (System.Object): Array of nine doubles: [ Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz ]
- `CoordinateSystemName` (System.String): Name of coordinate system; valid only if ReferenceFrame = swMomentsOfInertiaReferenceFrame_e.swMomentsOfInertiaReferenceFrame_UserCoordinateSystem

## Return Value

True if the moments of inertia are successfully overridden, false if not

## Remarks

This method is valid only if
IMassPropertyOverrideOptions::OverrideMomentsOfInertia
is set to true.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)

## See Also

- `IMassProperty2.GetMomentOfInertia`