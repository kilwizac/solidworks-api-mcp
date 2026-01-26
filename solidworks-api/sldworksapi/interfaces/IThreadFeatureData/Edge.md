---
type: property
interface: IThreadFeatureData
member: Edge
returns: Edge
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - edge
  - ithreadfeaturedata
  - thread
  - feature
  - data
readonly: null
---

# IThreadFeatureData.Edge

Gets or sets the entity where to start the helix of this thread feature.

## Signature

```csharp
Edge Edge {get; set;}
```
## Parameters

None.

## Return Value

Planar circular edge (see Remarks )

## Remarks

Use
IModelDocExtension::SelectByRay
with Mark = 1 to select the edge.
If this property does not set a planar circular edge, then you must use
IThreadFeatureData::StartEntity
to specify the start location of this thread's helix.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)