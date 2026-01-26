---
type: property
interface: IThreadFeatureData
member: StartEntity
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - startentity
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - start
  - entity
  - object
readonly: null
---

# IThreadFeatureData.StartEntity

Gets or sets the starting entity for the helix of this thread feature.

## Signature

```csharp
System.Object StartEntity {get; set;}
```
## Parameters

None.

## Return Value

Vertex , edge , plane , or planar surface (see Remarks )

## Remarks

Use
IModelDocExtension::SelectByRay
with Mark = 2 to select the start entity.
This property is optional, but required if
IThreadFeatureData::Edge
is not a planar circular
edge
.
See
Accessing Selections that Define Features
for additional details on using this method.