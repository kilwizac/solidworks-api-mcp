---
type: property
interface: IRefPlaneFeatureData
member: Type
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

# IRefPlaneFeatureData.Type

Gets the type of reference plane created in SOLIDWORKS 2009 or earlier. Can also get whether a constraint-based reference plane created in SOLIDWORKS 2010 or has angle or offset distance references. NOTE: This property is a get-only property. Set i

## Signature

```csharp
System.Int32 Type {get; set;}
```
## Parameters

None.

## Return Value

Type of reference plane as defined in swRefPlaneType_e

## Remarks

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