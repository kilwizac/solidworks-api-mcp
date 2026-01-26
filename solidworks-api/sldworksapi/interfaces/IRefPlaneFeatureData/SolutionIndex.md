---
type: property
interface: IRefPlaneFeatureData
member: SolutionIndex
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
  - solutionindex
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - solution
  - index
  - int32
readonly: null
---

# IRefPlaneFeatureData.SolutionIndex

Gets or sets the intended plane when there are multiple planes from which to select for an on-surface reference plane feature.

## Signature

```csharp
System.Int32 SolutionIndex {get; set;}
```
## Parameters

None.

## Return Value

Value indicating intended plane (0-based index)

## Remarks

This property corresponds to the
Other Solutions
check box that appears on the Plane PropertyManager page when there is more than one plane from which to select when creating an on-surface reference plane in SOLIDWORKS.
IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.