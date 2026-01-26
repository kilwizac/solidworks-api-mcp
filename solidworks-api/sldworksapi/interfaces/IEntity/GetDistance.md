---
type: method
interface: IEntity
member: GetDistance
returns: System.Int32
parameters:
  -
    name: BaseEntity
    type: System.Object
    description: IEntity of another edge or face to get distance from this entity (see Remarks )
  -
    name: MinDistance
    type: System.Boolean
    description: True to return minimum distance between entities; false to return maximum distance between entities
  -
    name: Parameter
    type: System.Object
    description: If MinDistance = False, and BaseEntity is an edge or curve, specify an array of two doubles (Min, Max), where Min and Max make up the U-parameter range of BaseEntity and BaseEntity is a face, specify an array of four doubles (UMin, VMin, UMax, VMax), where UMin, VMin, UMax, and VMax make up the UV-parameter range of the surface of BaseEntity If MinDistance = True, and BaseEntity is an edge or curve, optionally specify an array of two doubles (Min, Max), where Min and Max make up the U-parameter range of BaseEntity and BaseEntity is a face, optionally specify an array of four doubles (UMin, VMin, UMax, VMax), where UMin, VMin, UMax, and VMax make up the UV-parameter range of the surface of BaseEntity
  -
    name: Position1
    type: System.Object
    description: Array of doubles; coordinates of this entity that were used to measure the distance
  -
    name: Position2
    type: System.Object
    description: Array of doubles; coordinates of BaseEntity that were used to measure the distance
  -
    name: Distance
    type: System.Double
    description: Minimum or maximum distance between entities; if Parameter is not specified, minimum distance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEntity.IGetDistance
keywords:
  - getdistance
  - ientity
  - entity
  - distance
  - base
  - object
  - min
  - boolean
  - parameter
  - position1
  - position2
  - double
  - int32
  - between
  - entities
  - vba
  - vb
  - net
---

# IEntity.GetDistance

Gets the minimum or maximum distance between this entity and the given face or edge entity (see Remarks).

## Signature

```csharp
System.Int32 GetDistance( 
   System.Object
BaseEntity
,
   System.Boolean
MinDistance
,
   System.Object
Parameter
,
   out System.Object
Position1
,
   out System.Object
Position2
,
   out System.Double
Distance
)
```
## Parameters

- `BaseEntity` (System.Object): IEntity of another edge or face to get distance from this entity (see Remarks )
- `MinDistance` (System.Boolean): True to return minimum distance between entities; false to return maximum distance between entities
- `Parameter` (System.Object): If MinDistance = False, and BaseEntity is an edge or curve, specify an array of two doubles (Min, Max), where Min and Max make up the U-parameter range of BaseEntity and BaseEntity is a face, specify an array of four doubles (UMin, VMin, UMax, VMax), where UMin, VMin, UMax, and VMax make up the UV-parameter range of the surface of BaseEntity If MinDistance = True, and BaseEntity is an edge or curve, optionally specify an array of two doubles (Min, Max), where Min and Max make up the U-parameter range of BaseEntity and BaseEntity is a face, optionally specify an array of four doubles (UMin, VMin, UMax, VMax), where UMin, VMin, UMax, and VMax make up the UV-parameter range of the surface of BaseEntity
- `Position1` (System.Object): Array of doubles; coordinates of this entity that were used to measure the distance
- `Position2` (System.Object): Array of doubles; coordinates of BaseEntity that were used to measure the distance
- `Distance` (System.Double): Minimum or maximum distance between entities; if Parameter is not specified, minimum distance

## Return Value

0 if success; -1 if failure

## Remarks

Only face and edge entities are supported.
To populate Parameter you can find the UV parameter ranges as follows:
For edges and curves, use
IEdge::GetCurveParams2
For faces, use
IFace2::GetUVBounds

## Examples

- Get Distance Between Entities (VBA) (Get_Distance_Between_Entities_Example_VB.htm)
- Get Distance Between Entities (VB.NET) (Get_Distance_Between_Entities_Example_VBNET.htm)
- Get Distance Between Entities (C#) (Get_Distance_Between_Entities_Example_CSharp.htm)

## See Also

- `IEntity.IGetDistance`