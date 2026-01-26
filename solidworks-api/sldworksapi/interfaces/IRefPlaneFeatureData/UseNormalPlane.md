---
type: property
interface: IRefPlaneFeatureData
member: UseNormalPlane
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefPlaneFeatureData.AutoSize
keywords:
  - usenormalplane
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - use
  - normal
  - boolean
readonly: null
---

# IRefPlaneFeatureData.UseNormalPlane

Gets or sets whether to:

## Signature

```csharp
System.Boolean UseNormalPlane {get; set;}
```
## Parameters

None.

## Return Value

True to use a plane normal to the selected plane and automatically size the plane, false to not

## Remarks

If this property is true, then you can get or set
IRefPlaneFeatureData::Angle
.
IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## See Also

- `IRefPlaneFeatureData.AutoSize`