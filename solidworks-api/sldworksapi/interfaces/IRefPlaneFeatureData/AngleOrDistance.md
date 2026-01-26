---
type: property
interface: IRefPlaneFeatureData
member: AngleOrDistance
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the specified reference as defined in swRefPlaneReferenceIndex_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefPlaneFeatureData.Reference
keywords:
  - planes
  - see
  - also
  - irefplane
  - angle
  - distance
  - angleordistance
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - index
  - int32
  - double
readonly: null
---

# IRefPlaneFeatureData.AngleOrDistance

Gets or sets the angle or distance of the specified reference for this reference plane feature.

## Signature

```csharp
System.Double AngleOrDistance( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): Index of the specified reference as defined in swRefPlaneReferenceIndex_e

## Return Value

Angle or distance

## Remarks

IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## See Also

- `IRefPlaneFeatureData.Reference`