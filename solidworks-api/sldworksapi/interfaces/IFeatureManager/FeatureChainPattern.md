---
type: method
interface: IFeatureManager
member: FeatureChainPattern
returns: Feature
parameters:
  -
    name: PitchMethod
    type: System.Int32
    description: Pitch method as defined in swChainPatternPitchMethod_e ; available for all types of chain patterns
  -
    name: FlipDirection
    type: System.Boolean
    description: True to reverse the direction of the chain pattern, false to not; available for all types of chain patterns
  -
    name: FillPath
    type: System.Boolean
    description: True to automatically set the number of pattern instances to fill the path, false to not; available for all types of chain patterns and when EqualSpacing is false for distance and linkage distance chain patterns
  -
    name: Number
    type: System.Int32
    description: Number of pattern instances; available for all types of chain patterns when FillPath is false
  -
    name: Spacing
    type: System.Double
    description: Distance between the pattern instances when EqualSpacing is false; only available for distance and linkage distance chain patterns when EqualSpacing is false
  -
    name: GroupOneFlipPlane
    type: System.Boolean
    description: True to flip the path alignment plane for Chain Group 1 , false to not; available for all types of chain patterns
  -
    name: GroupTwoChain
    type: System.Boolean
    description: True to set the component to pattern for Chain Group 2 , false to not; only available for connected linkage chain patterns
  -
    name: GroupTwoFlipPlane
    type: System.Boolean
    description: True to flip the path alignment plane for Chain Group 2 , false to not; only available for connected linkage chain patterns
  -
    name: AlignMethod
    type: System.Int32
    description: Alignment method as defined in swChainPatternAlignment_e ; only available for distance and linkage distance chain patterns
  -
    name: Options
    type: System.Int32
    description: Option as defined in swChainPatternOptions_e ; available for all types of chain patterns
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurechainpattern
  - ifeaturemanager
  - feature
  - manager
  - chain
  - pattern
  - pitch
  - int32
  - flip
  - direction
  - boolean
  - fill
  - path
  - number
  - spacing
  - double
  - group
  - one
  - plane
  - two
  - align
  - options
---

# IFeatureManager.FeatureChainPattern

Obsolete. See IFeatureManager::CreateFeature and the Remarks in IChainPatternFeatureData.

## Signature

```csharp
Feature FeatureChainPattern( 
   System.Int32
PitchMethod
,
   System.Boolean
FlipDirection
,
   System.Boolean
FillPath
,
   System.Int32
Number
,
   System.Double
Spacing
,
   System.Boolean
GroupOneFlipPlane
,
   System.Boolean
GroupTwoChain
,
   System.Boolean
GroupTwoFlipPlane
,
   System.Int32
AlignMethod
,
   System.Int32
Options
)
```
## Parameters

- `PitchMethod` (System.Int32): Pitch method as defined in swChainPatternPitchMethod_e ; available for all types of chain patterns
- `FlipDirection` (System.Boolean): True to reverse the direction of the chain pattern, false to not; available for all types of chain patterns
- `FillPath` (System.Boolean): True to automatically set the number of pattern instances to fill the path, false to not; available for all types of chain patterns and when EqualSpacing is false for distance and linkage distance chain patterns
- `Number` (System.Int32): Number of pattern instances; available for all types of chain patterns when FillPath is false
- `Spacing` (System.Double): Distance between the pattern instances when EqualSpacing is false; only available for distance and linkage distance chain patterns when EqualSpacing is false
- `GroupOneFlipPlane` (System.Boolean): True to flip the path alignment plane for Chain Group 1 , false to not; available for all types of chain patterns
- `GroupTwoChain` (System.Boolean): True to set the component to pattern for Chain Group 2 , false to not; only available for connected linkage chain patterns
- `GroupTwoFlipPlane` (System.Boolean): True to flip the path alignment plane for Chain Group 2 , false to not; only available for connected linkage chain patterns
- `AlignMethod` (System.Int32): Alignment method as defined in swChainPatternAlignment_e ; only available for distance and linkage distance chain patterns
- `Options` (System.Int32): Option as defined in swChainPatternOptions_e ; available for all types of chain patterns

## Return Value

Chain pattern feature

## Remarks

You must pre-select the entities for the chain pattern feature. Using the selected entities, this method inserts one of these chain pattern features:
distance
distance linkage
connected linkage
Entity to select
Corresponding Chain Pattern PropertyManager control
Selection mark
Number of selections
2D or 3D
sketch
containing an open or closed loop,
Sketch line
, or
Model
edge
Path
2
1 for all types of chain patterns
Assembly
component
Chain Group 1 Component to Pattern
1
1 for all types of chain patterns
Cylindrical
face
,
Circular or linear edge,
Sketch point
,
Vertex
, or
Reference axis
Chain Group 1 Path Link 1
256
1 for all types of chain patterns
Cylindrical face,
Circular or linear edge,
Sketch point,
Vertex, or
Reference axis
Chain Group 1 Path Link 2
512
1 for distance linkage or connected linkage
None for distance
Component
plane
or planar face
Chain Group 1 Path Alignment Plane
16384
1 for all types of chain patterns
Assembly component
Chain Group 2 Component to Pattern
2048
1 for connected linkage
None for distance or linkage distance
Cylindrical face,
Circular or linear edge,
Sketch point,
Vertex, or
Reference axis
Chain Group 2 Path Link 1
4096
1 for connected linkage
None for distance or linkage distance
Cylindrical face,
Circular or linear edge,
Sketch point,
Vertex, or
Reference axis
Chain Group 2 Path Link 2
8192
1 for connected linkage
None for distance or linkage distance
Component plane or planar face
Group 2 Path Alignment Plane
32768
1 for connected linkage
None for distance or linkage distance
Assembly plane
Face normal alignment
1024
1 if the chain path is a sketch line
None for all other types of paths
To
set equal spacing
between chain pattern instances, edit the chain pattern feature after creating it.