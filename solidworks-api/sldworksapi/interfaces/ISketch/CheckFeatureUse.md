---
type: method
interface: ISketch
member: CheckFeatureUse
returns: System.Int32
parameters:
  -
    name: FeatureType
    type: System.Int32
    description: Determine if this type of feature can be created as defined in swSketchCheckFeatureProfileUsage_e
  -
    name: OpenCount
    type: System.Int32
    description: Number of open contours found in this sketch
  -
    name: ClosedCount
    type: System.Int32
    description: Number of closed contours found in this sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - sketch
  - check
  - isketch
  - checkfeatureuse
  - use
  - type
  - int32
  - open
  - count
  - closed
  - determine
  - suitable
  - vba
---

# ISketch.CheckFeatureUse

Checks to see if this sketch is valid for use in creating a specified feature.

## Signature

```csharp
System.Int32 CheckFeatureUse( 
   System.Int32
FeatureType
,
   out System.Int32
OpenCount
,
   out System.Int32
ClosedCount
)
```
## Parameters

- `FeatureType` (System.Int32): Determine if this type of feature can be created as defined in swSketchCheckFeatureProfileUsage_e
- `OpenCount` (System.Int32): Number of open contours found in this sketch
- `ClosedCount` (System.Int32): Number of closed contours found in this sketch

## Return Value

swSketchCheckFeatureStatus_OK if this sketch can be used to create the specified feature; see swSketchCheckFeatureStatus_e for possible failure values

## Remarks

This method is equivalent to the SOLIDWORKS interactive tool
Check Sketch for Feature Usage
. See the SOLIDWORKS Help for details.
The OpenCount and ClosedCount arguments are output values. If this method returns swSketchCheckFeatureStatus_OK, meaning that the sketch can be used to create the specified feature, then these two arguments contain useful information. If this method returns something else, then OpenCount and ClosedCount both return 0.
If the featureType value is not valid, this method returns
swSketchCheckFeatureStatus_UnknownError.

## Examples

- Determine If Sketch Suitable for Feature (VBA) (Determine_If_Sketch_Suitable_for_Feature_Example_VB.htm)