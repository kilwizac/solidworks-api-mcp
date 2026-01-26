---
type: method
interface: IFeatureManager
member: InsertConnectionPoint
returns: System.Boolean
parameters:
  -
    name: Type
    type: System.Int32
    description: Route type as defined in swConnectionPointType_e
  -
    name: SubType
    type: System.Int32
    description: Electrical route sub-type as defined in swElectricalConnectionPointType_e
  -
    name: ReverseDirection
    type: System.Boolean
    description: True to flip the direction in which the route exits the fitting, false to not
  -
    name: Diameter
    type: System.Double
    description: Nominal diameter (for pipe, tube, and electrical conduit fittings only)
  -
    name: StubLength
    type: System.Double
    description: Default stub length to extend from the connector or fitting when inserted into routes NOTE : For ribbon cables, leave stub length at 0 or set it to a value greater than half the width of the cable to assure that folds made near the connector can be created properly.
  -
    name: MinimumStraight
    type: System.Double
    description: Minimum straight length (for tubes only)
  -
    name: EndLengthAdjustment
    type: System.Double
    description: End length adjustment (for tubes only)
  -
    name: ConductorSplitLength
    type: System.Double
    description: Conductor split length (for electrical only)
  -
    name: SchematicPinID
    type: System.String
    description: 2D schematic pin ID (for ribbon cables only)
  -
    name: CableWidth
    type: System.Double
    description: Width (for ribbon cables only)
  -
    name: CableThickness
    type: System.Double
    description: Cable thickness (for ribbon cables only)
  -
    name: SwitchPin1Position
    type: System.Boolean
    description: Switch Pin1 position (for ribbon cables only)
  -
    name: SpecificationFieldName
    type: System.String
    description: Specification field name (for pipes and tubes only)
  -
    name: SpecificationValue
    type: System.String
    description: Specification value (for pipes and tubes only)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IAssemblyDoc.GetRouteManager
  - IConnectionPointFeatureData
  - IModelDoc2.InsertRoutePoint
keywords:
  - routing
  - connection
  - point
  - insertconnectionpoint
  - ifeaturemanager
  - feature
  - manager
  - insert
  - type
  - int32
  - sub
  - reverse
  - direction
  - boolean
  - diameter
  - double
  - stub
  - length
  - minimum
  - straight
  - end
  - adjustment
  - conductor
  - split
  - schematic
  - pin
  - id
  - string
  - cable
  - width
  - thickness
  - switch
  - pin1
  - position
  - specification
  - field
  - name
  - value
  - vb
  - net
  - vba
---

# IFeatureManager.InsertConnectionPoint

Adds a connection point based on the selected entities.

## Signature

```csharp
System.Boolean InsertConnectionPoint( 
   System.Int32
Type
,
   System.Int32
SubType
,
   System.Boolean
ReverseDirection
,
   System.Double
Diameter
,
   System.Double
StubLength
,
   System.Double
MinimumStraight
,
   System.Double
EndLengthAdjustment
,
   System.Double
ConductorSplitLength
,
   System.String
SchematicPinID
,
   System.Double
CableWidth
,
   System.Double
CableThickness
,
   System.Boolean
SwitchPin1Position
,
   System.String
SpecificationFieldName
,
   System.String
SpecificationValue
)
```
## Parameters

- `Type` (System.Int32): Route type as defined in swConnectionPointType_e
- `SubType` (System.Int32): Electrical route sub-type as defined in swElectricalConnectionPointType_e
- `ReverseDirection` (System.Boolean): True to flip the direction in which the route exits the fitting, false to not
- `Diameter` (System.Double): Nominal diameter (for pipe, tube, and electrical conduit fittings only)
- `StubLength` (System.Double): Default stub length to extend from the connector or fitting when inserted into routes NOTE : For ribbon cables, leave stub length at 0 or set it to a value greater than half the width of the cable to assure that folds made near the connector can be created properly.
- `MinimumStraight` (System.Double): Minimum straight length (for tubes only)
- `EndLengthAdjustment` (System.Double): End length adjustment (for tubes only)
- `ConductorSplitLength` (System.Double): Conductor split length (for electrical only)
- `SchematicPinID` (System.String): 2D schematic pin ID (for ribbon cables only)
- `CableWidth` (System.Double): Width (for ribbon cables only)
- `CableThickness` (System.Double): Cable thickness (for ribbon cables only)
- `SwitchPin1Position` (System.Boolean): Switch Pin1 position (for ribbon cables only)
- `SpecificationFieldName` (System.String): Specification field name (for pipes and tubes only)
- `SpecificationValue` (System.String): Specification value (for pipes and tubes only)

## Return Value

True if the connection is inserted, false if not

## Remarks

This method only works when the SOLIDWORKS Routing add-in is loaded (click
Tools > Add-Ins
and select
SOLIDWORKS Routing
). This method currently supports part documents only.
Use
IModelDocExtension::SelectByID2
with:
Mark = 1, which can be any one of the following entities to indicate the origin of a route:
Circular edge
Circular face
Face or plane plus a sketch point or vertex (select the plane or face where the routing segment exits the fitting, then select the sketch point that defines the end of the adjoining route segment)
Mark = 2, which can be a reference axis or edge to indicate which entity to align the width of the cable (for ribbon cables only)
See the SOLIDWORKS Help for details about connection points and routing.

## Examples

- Insert Connection Point (C#) (Insert_Connection_Point_Example_CSharp.htm)
- Insert Connection Point (VB.NET) (Insert_Connection_Point_Example_VBNET.htm)
- Insert Connection Point (VBA) (Insert_Connection_Point_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetRouteManager`
- `IConnectionPointFeatureData`
- `IModelDoc2.InsertRoutePoint`