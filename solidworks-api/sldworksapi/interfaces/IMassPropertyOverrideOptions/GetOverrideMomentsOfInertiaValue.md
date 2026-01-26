---
type: method
interface: IMassPropertyOverrideOptions
member: GetOverrideMomentsOfInertiaValue
returns: System.Object
parameters:
  -
    name: IsReferenceFrameSet
    type: System.Boolean
    description: True if reference frame is set, false if not
  -
    name: CoordinateSystemName
    type: System.String
    description: Name of coordinate system
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.GetMomentOfInertia
  - IMassPropertyOverrideOptions.OverrideMomentsOfInertia
  - IMassPropertyOverrideOptions.SetOverrideMomentsOfInertiaValue
keywords:
  - getoverridemomentsofinertiavalue
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - moments
  - inertia
  - value
  - reference
  - frame
  - boolean
  - coordinate
  - name
  - string
  - object
---

# IMassPropertyOverrideOptions.GetOverrideMomentsOfInertiaValue

Gets the override moments of inertia.

## Signature

```csharp
System.Object GetOverrideMomentsOfInertiaValue( 
   out System.Boolean
IsReferenceFrameSet
,
   out System.String
CoordinateSystemName
)
```
## Parameters

- `IsReferenceFrameSet` (System.Boolean): True if reference frame is set, false if not
- `CoordinateSystemName` (System.String): Name of coordinate system

## Return Value

Array of nine doubles: [ Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz ]

## See Also

- `IMassProperty2.GetMomentOfInertia`
- `IMassPropertyOverrideOptions.OverrideMomentsOfInertia`
- `IMassPropertyOverrideOptions.SetOverrideMomentsOfInertiaValue`