---
type: property
interface: IRefPlaneFeatureData
member: ProjectionType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - surface
  - planes
  - see
  - also
  - irefplane
  - projectiontype
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - projection
  - type
  - int32
readonly: null
---

# IRefPlaneFeatureData.ProjectionType

Gets or sets the projection type for this on-surface reference plane feature.

## Signature

```csharp
System.Int32 ProjectionType {get; set;}
```
## Parameters

None.

## Return Value

Type of a plane on a surface as defined in swOnSurfacePlaneProjectType_e

## Remarks

IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.