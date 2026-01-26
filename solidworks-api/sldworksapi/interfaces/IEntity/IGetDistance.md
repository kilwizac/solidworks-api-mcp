---
type: method
interface: IEntity
member: IGetDistance
returns: System.Int32
parameters:
  -
    name: BaseEntity
    type: Entity
    description: IEntity of another edge or face to get distance from this entity (see Remarks )
  -
    name: MinDistance
    type: System.Boolean
    description: True to return minimum distance; false to return maximum distance
  -
    name: Parameter
    type: System.Double
    description: For in-process, unmanaged C++: If MinDistance = False, and BaseEntity is an edge or curve, specify an array of two doubles (Min, Max), where Min and Max make up the U-parameter range of BaseEntity and BaseEntity is a face, specify an array of four doubles (UMin, VMin, UMax, VMax), where UMin, VMin, UMax, and VMax make up the UV-parameter range of the surface of BaseEntity If MinDistance = True, and BaseEntity is an edge or curve, optionally specify an array of two doubles (Min, Max), where Min and Max make up the U-parameter range of BaseEntity and BaseEntity is a face, optionally specify an array of four doubles (UMin, VMin, UMax, VMax), where UMin, VMin, UMax, and VMax make up the UV-parameter range of the surface of BaseEntity For VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Position1
    type: System.Double
    description: For in-process, unmanaged C++: pointer to an array of doubles (coordinates of this entity that were used to measure the distance) For VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Position2
    type: System.Double
    description: For in-process, unmanaged C++: pointer to an array of doubles (coordinates of BaseEntity that were used to measure the distance) For VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Distance
    type: System.Double
    description: Minimum or maximum distance between entities; if Parameter is not specified, the minimum distance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEntity.GetDistance
keywords:
  - igetdistance
  - ientity
  - entity
  - distance
  - base
  - min
  - boolean
  - parameter
  - double
  - position1
  - position2
  - int32
---

# IEntity.IGetDistance

Gets the minimum or maximum distance between this entity and the given face or edge entity (see Remarks).

## Signature

```csharp
System.Int32 IGetDistance( 
   Entity
BaseEntity
,
   System.Boolean
MinDistance
,
   ref System.Double
Parameter
,
   out System.Double
Position1
,
   out System.Double
Position2
,
   out System.Double
Distance
)
```
## Parameters

- `BaseEntity` (Entity): IEntity of another edge or face to get distance from this entity (see Remarks )
- `MinDistance` (System.Boolean): True to return minimum distance; false to return maximum distance
- `Parameter` (System.Double): For in-process, unmanaged C++: If MinDistance = False, and BaseEntity is an edge or curve, specify an array of two doubles (Min, Max), where Min and Max make up the U-parameter range of BaseEntity and BaseEntity is a face, specify an array of four doubles (UMin, VMin, UMax, VMax), where UMin, VMin, UMax, and VMax make up the UV-parameter range of the surface of BaseEntity If MinDistance = True, and BaseEntity is an edge or curve, optionally specify an array of two doubles (Min, Max), where Min and Max make up the U-parameter range of BaseEntity and BaseEntity is a face, optionally specify an array of four doubles (UMin, VMin, UMax, VMax), where UMin, VMin, UMax, and VMax make up the UV-parameter range of the surface of BaseEntity For VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Position1` (System.Double): For in-process, unmanaged C++: pointer to an array of doubles (coordinates of this entity that were used to measure the distance) For VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Position2` (System.Double): For in-process, unmanaged C++: pointer to an array of doubles (coordinates of BaseEntity that were used to measure the distance) For VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Distance` (System.Double): Minimum or maximum distance between entities; if Parameter is not specified, the minimum distance

## Return Value

0 if success; -1 if failure

## Remarks

Only face and edge entities are supported.
To populate Parameter you can find the UV parameter ranges as follows:
For edges and curves, use
IEdge::GetCurveParams2
For faces, use
IFace2::GetUVBounds

## See Also

- `IEntity.GetDistance`