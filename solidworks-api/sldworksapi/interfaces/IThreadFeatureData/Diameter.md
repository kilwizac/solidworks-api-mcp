---
type: property
interface: IThreadFeatureData
member: Diameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - diameter
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - double
readonly: null
---

# IThreadFeatureData.Diameter

Gets or sets the diameter of the cylindrical face or helix of this thread feature.

## Signature

```csharp
System.Double Diameter {get; set;}
```
## Parameters

None.

## Return Value

0.0 < Diameter of the helix; default is the diameter of the circular edge specified by IThreadFeatureData::Edge

## Remarks

Specify either a value or an equation that starts with an equal sign (=).
This property is valid only if
IThreadFeatureData::DiameterOverride
is set to true.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)