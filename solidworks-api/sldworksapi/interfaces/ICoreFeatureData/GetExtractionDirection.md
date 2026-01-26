---
type: method
interface: ICoreFeatureData
member: GetExtractionDirection
returns: System.Int32
parameters:
  -
    name: Type1
    type: System.Int32
    description: Type of entity as defined in swSelectType_e
  -
    name: PDir1
    type: System.Object
    description: Entity that defines the extraction direction (see Remarks )
  -
    name: Type2
    type: System.Int32
    description: Type of entity as defined in swSelectType_e
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
  - ICoreFeatureData.SetExtractionDirection
keywords:
  - getextractiondirection
  - icorefeaturedata
  - core
  - feature
  - data
  - extraction
  - direction
  - type1
  - int32
  - dir1
  - object
  - type2
  - dir2
  - vb
  - net
  - vba
---

# ICoreFeatureData.GetExtractionDirection

Gets the entities that define the extraction direction of this core feature.

## Signature

```csharp
System.Int32 GetExtractionDirection( 
   out System.Int32
Type1
,
   out System.Object
PDir1
,
   out System.Int32
Type2
,
   out System.Object
PDir2
)
```
## Parameters

- `Type1` (System.Int32): Type of entity as defined in swSelectType_e
- `PDir1` (System.Object): Entity that defines the extraction direction (see Remarks )
- `Type2` (System.Int32): Type of entity as defined in swSelectType_e
- `PDir2` (System.Object): Entity that defines the extraction direction (see Remarks )

## Return Value

Number of entities that define the extraction direction

## Remarks

The types of entities that define the extraction direction are:
Face
Plane
Edge
Vertex
Sketch line
Sketch point
There can be two entities because two sketch points can specify a direction.

## Examples

- Get Core Feature Data (C#) (Get_Core_Feature_Example_CSharp.htm)
- Get Core Feature Data (VB.NET) (Get_Core_Feature_Example_VBNET.htm)
- Get Core Feature Data (VBA) (Get_Core_Feature_Example_VB.htm)

## See Also

- `ICoreFeatureData.SetExtractionDirection`