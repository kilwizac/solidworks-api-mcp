---
type: method
interface: IFeatureManager
member: AdvancedHole2
returns: Feature
parameters:
  -
    name: AdvancedHoleNearElementArray
    type: System.Object
    description: Array of near side hole data objects (see Remarks )
  -
    name: AdvancedHoleFarElementArray
    type: System.Object
    description: Array of far side hole data objects (see Remarks )
  -
    name: UseBaselineDimensions
    type: System.Boolean
    description: True to use baseline dimensions, false to not (see Remarks )
  -
    name: IsCustomCallout
    type: System.Boolean
    description: True to customize the hole callout, false to use a default hole callout (see Remarks )
  -
    name: IsDepthUptoTip
    type: System.Boolean
    description: True if hole depth is up to the drill point tip, false if hole depth is up to the shoulder (full depth of hole) (see Remarks )
  -
    name: ResultArray
    type: System.Object
    description: Array of result codes as defined in swAdvancedHoleResults_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - advanced
  - hole
  - see
  - also
  - iadvancedholefeaturedata
  - create
  - feature
  - ifeature
  - holes
  - stacked
  - advancedhole2
  - ifeaturemanager
  - manager
  - hole2
  - near
  - element
  - array
  - object
  - far
  - use
  - baseline
  - dimensions
  - boolean
  - custom
  - callout
  - depth
  - upto
  - tip
  - result
  - vba
  - vb
  - net
---

# IFeatureManager.AdvancedHole2

Creates an Advanced Hole feature.

## Signature

```csharp
Feature AdvancedHole2( 
   System.Object
AdvancedHoleNearElementArray
,
   System.Object
AdvancedHoleFarElementArray
,
   System.Boolean
UseBaselineDimensions
,
   System.Boolean
IsCustomCallout
,
   System.Boolean
IsDepthUptoTip
,
   out System.Object
ResultArray
)
```
## Parameters

- `AdvancedHoleNearElementArray` (System.Object): Array of near side hole data objects (see Remarks )
- `AdvancedHoleFarElementArray` (System.Object): Array of far side hole data objects (see Remarks )
- `UseBaselineDimensions` (System.Boolean): True to use baseline dimensions, false to not (see Remarks )
- `IsCustomCallout` (System.Boolean): True to customize the hole callout, false to use a default hole callout (see Remarks )
- `IsDepthUptoTip` (System.Boolean): True if hole depth is up to the drill point tip, false if hole depth is up to the shoulder (full depth of hole) (see Remarks )
- `ResultArray` (System.Object): Array of result codes as defined in swAdvancedHoleResults_e (see Remarks )

## Return Value

IFeature ; Nothing or null if this method results in an invalid geometry condition (see Remarks )

## Remarks

The Advanced Hole feature:
is separate from the Hole Wizard functionality (see
FeatureManager::HoleWizard5
).
consists of several hole elements, e.g., counterbore, countersink, straight, and tapered tap, that are stacked from the near and far side faces inward. The near and far side stacks, combined, form the Advanced Hole.
can be added only to parts at this time.
AdvancedHoleNearElementArray and AdvancedHoleFarElementArray each contain one or more hole type-specific objects in order as they stack from the near and far side faces:
ICounterboreElementData
ICountersinkElementData
IStraightElementData
IStraightTapElementData
ITaperedTapElementData
The hole type-specific interfaces above extend the parent interface,
IAdvancedHoleElementData
, which you use to set general Advanced Hole properties.
UseBaseLineDimensions controls which hole type-specific properties are valid. See
IAdvancedHoleFeatureData::UseBaselineDimensions
.
IsCustomCallout set to true allows you to set a custom callout string for individual hole elements using
IAdvancedHoleElementData::CalloutString
.
IsDepthUptoTip is valid only when:
No far side elements are in the stack.
The near side end element:
is a hole or straight tap,
has an end shape of drill point, and
has an end condition that is blind or offset from surface.
ResultArray contains a return code for each element in AdvancedHoleNearElementArray and AdvancedHoleFarElementArray. It is possible for this method to fail to create an advanced hole, even though ResultArray contains all success result codes. If the individual hole elements all combine to produce invalid geometry (e.g., a disjoint body or a self-intersecting face) or if incorrect near or far side faces are selected, then this method returns Nothing or null.
To create an Advanced Hole feature, follow the examples which do the following:
Call
IModelDocExtension::SelectByRay
to select the near side (Mark = 256) and far side (Mark = 512) faces of the Advanced Hole. You must select these faces by location, so do not use
IEntity::Select4
.
Call
IModelDocExtension::CreateAdvancedHoleElementData
to create an AdvancedHoleElementData object.
Set the general Advanced Hole properties using the AdvancedHoleElementData object.
Cast the AdvancedHoleElementData object using one of the hole type-specific interfaces.
Set the specific Advanced Hole properties using the hole type-specific object. For IStraightTapElementData and IStraightElementData objects, specify the IsDepthUptoTip requirements described in these Remarks.
Repeat steps 2 - 5 for each hole element you want to add to the near and far side stacks of the Advanced Hole.
Create near and far side arrays of the hole type-specific objects in stacking order from each face inward. The innermost elements of each stack should match to create a contiguous hole that extends from near side face to far side face. Create an empty far side array if using IsDepthUptoTip.
Pass the near and far side arrays to this method to create the Advanced Hole.
Delete the defining Advanced Hole sketch point and call
ISketchManager::CreatePoint
one or more times to insert the Advanced Hole in multiple locations.
To edit an Advanced Hole feature, call
IFeature::GetDefinition
to access
IAdvancedHoleFeatureData
. See
Accessing Selections that Define Features
.

## Examples

- Create Advanced Hole Feature (VBA) (Create_Advanced_Hole_Example_VB.htm)
- Create Advanced Hole Feature (VB.NET) (Create_Advanced_Hole_Example_VBNET.htm)
- Create Advanced Hole Feature (C#) (Create_Advanced_Hole_Example_CSharp.htm)