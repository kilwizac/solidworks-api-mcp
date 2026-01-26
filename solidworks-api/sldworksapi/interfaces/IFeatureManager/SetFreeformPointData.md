---
type: method
interface: IFeatureManager
member: SetFreeformPointData
returns: void
parameters:
  -
    name: Direction
    type: System.Int16
    description: Direction of the curve; valid values are either 0 or 1
  -
    name: CurveParameter
    type: System.Double
    description: Curve where to add the point
  -
    name: ParameterOnCurve
    type: System.Double
    description: Where on the curve to add the point
  -
    name: XOffset
    type: System.Double
    description: Value by which to offset x (this value is typically 0, which indicates that the point was not modified)
  -
    name: YOffset
    type: System.Double
    description: Value by which to offset y (this value is typically 0, which indicates that the point was not modified)
  -
    name: ZOffset
    type: System.Double
    description: Value by which to offset z (this value is typically 0, which indicates that the point was not modified)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - freeform
  - setfreeformpointdata
  - ifeaturemanager
  - manager
  - point
  - data
  - direction
  - int16
  - curve
  - parameter
  - double
  - offset
  - void
---

# IFeatureManager.SetFreeformPointData

Adds a point to a curve for a Freeform feature.

## Signature

```csharp
void SetFreeformPointData( 
   System.Int16
Direction
,
   System.Double
CurveParameter
,
   System.Double
ParameterOnCurve
,
   System.Double
XOffset
,
   System.Double
YOffset
,
   System.Double
ZOffset
)
```
## Parameters

- `Direction` (System.Int16): Direction of the curve; valid values are either 0 or 1
- `CurveParameter` (System.Double): Curve where to add the point
- `ParameterOnCurve` (System.Double): Where on the curve to add the point
- `XOffset` (System.Double): Value by which to offset x (this value is typically 0, which indicates that the point was not modified)
- `YOffset` (System.Double): Value by which to offset y (this value is typically 0, which indicates that the point was not modified)
- `ZOffset` (System.Double): Value by which to offset z (this value is typically 0, which indicates that the point was not modified)

## Return Value

Unknown.

## Remarks

The SOLIDWORKS API Freeform-related methods are intended to journal the actions performed by an interactive user while creating the feature. Because user interaction is required to create a Freeform feature, fully automating the creation of it is not possible using the SOLIDWORKS API.
The typical steps performed by an interactive user to create a Freeform feature are:
Select the face to form.
Add curves on the selected face. Corresponds to
IFeatureManager::SetFreeformCurveData
.
Add points on the curves. Corresponds to IFeatureManager::SetFreeformPointData.
Specify boundary continuity. Corresponds to
IFeatureManager::SetFreeformBoundaryContinuity
.
Interactively pull or push the points to change the shape of the selected face.
Insert the Freeform feature. Corresponds to this method,
IFeatureManager::InsertFreeform2
.
Record a macro while interactively creating a Freeform feature, then examine the macro to see the order in which the Freeform-related methods are recorded.