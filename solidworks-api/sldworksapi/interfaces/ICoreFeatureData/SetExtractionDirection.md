---
type: method
interface: ICoreFeatureData
member: SetExtractionDirection
returns: System.Boolean
parameters:
  -
    name: PDir1
    type: System.Object
    description: Entity that defines the extraction direction (see Remarks )
  -
    name: PDir2
    type: System.Object
    description: Entity that defines the extraction direction (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoreFeatureData.GetExtractionDirection
keywords:
  - setextractiondirection
  - icorefeaturedata
  - core
  - feature
  - data
  - extraction
  - direction
  - dir1
  - object
  - dir2
  - boolean
---

# ICoreFeatureData.SetExtractionDirection

Sets the entities that define the extraction direction of this core feature.

## Signature

```csharp
System.Boolean SetExtractionDirection( 
   System.Object
PDir1
,
   System.Object
PDir2
)
```
## Parameters

- `PDir1` (System.Object): Entity that defines the extraction direction (see Remarks )
- `PDir2` (System.Object): Entity that defines the extraction direction (see Remarks )

## Return Value

True if the entities that define the extraction direction of this core feature are set, false if not

## Remarks

The types of entities that define the extraction direction are:
Face
Plane
Edge
Vertex
Sketch line
Sketch point
There can be two entities because two sketch points can specify a direction.

## See Also

- `ICoreFeatureData.GetExtractionDirection`