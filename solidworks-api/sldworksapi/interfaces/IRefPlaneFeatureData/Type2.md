---
type: property
interface: IRefPlaneFeatureData
member: Type2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefPlane
keywords:
  - planes
  - see
  - also
  - irefplane
  - type
  - type2
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - int32
  - insert
  - reference
  - vb
  - net
  - vba
readonly: null
---

# IRefPlaneFeatureData.Type2

Gets whether the reference plane is constraint based; thus, created in SOLIDWORKS 2010 and later.

## Signature

```csharp
System.Int32 Type2 {get; set;}
```
## Parameters

None.

## Return Value

Type of reference plane as defined in swRefPlaneType_e (see Remarks )

## Remarks

If IRefPlaneFeatureData::Type2 returns swRefPlaneConstraintBase, then the reference plane is constraint based and was created in SOLIDWORKS 2010 or later. To determine if a constraint-based reference plane has angle or offset distances references, call
IRefPlaneFeatureData::Type
:
swRefPlaneAngle is returned for angle references.
swRefPlaneDistance is returned for offset distance references.
Otherwise, the reference plane is not constraint based and was created in SOLIDWORKS 2009 or earlier. Call
IRefPlaneFeatureData::Type
to determine its type.
IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## Examples

- Insert Reference Plane (C#) (Insert_Reference_Plane_Example_CSharp.htm)
- Insert Reference Plane (VB.NET) (Insert_Reference_Plane_Example_VBNET.htm)
- Insert Reference Plane (VBA) (Insert_Reference_Plane_Example_VB.htm)

## See Also

- `IRefPlane`