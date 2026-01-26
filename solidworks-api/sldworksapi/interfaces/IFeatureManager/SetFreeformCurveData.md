---
type: method
interface: IFeatureManager
member: SetFreeformCurveData
returns: void
parameters:
  -
    name: Direction
    type: System.Int16
    description: Direction of the curve; valid values are either 0 or 1
  -
    name: CurveParameter
    type: System.Double
    description: Where on the face to add the curve ; valid values are between 0 and 1
  -
    name: Tangent0X
    type: System.Double
    description: Tangent vector at one end of curve
  -
    name: Tangent0Y
    type: System.Double
    description: Tangent vector at one end of curve
  -
    name: Tangent0Z
    type: System.Double
    description: Tangent vector at one end of curve
  -
    name: Tangent1X
    type: System.Double
    description: Tangent vector at other end of curve
  -
    name: Tangent1Y
    type: System.Double
    description: Tangent vector at other end of curve
  -
    name: Tangent1Z
    type: System.Double
    description: Tangent vector at other end of curve
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
  - setfreeformcurvedata
  - ifeaturemanager
  - manager
  - curve
  - data
  - direction
  - int16
  - parameter
  - double
  - tangent0
  - tangent1
  - void
---

# IFeatureManager.SetFreeformCurveData

Adds a curve to the pre-selected face for a Freeform feature.

## Signature

```csharp
void SetFreeformCurveData( 
   System.Int16
Direction
,
   System.Double
CurveParameter
,
   System.Double
Tangent0X
,
   System.Double
Tangent0Y
,
   System.Double
Tangent0Z
,
   System.Double
Tangent1X
,
   System.Double
Tangent1Y
,
   System.Double
Tangent1Z
)
```
## Parameters

- `Direction` (System.Int16): Direction of the curve; valid values are either 0 or 1
- `CurveParameter` (System.Double): Where on the face to add the curve ; valid values are between 0 and 1
- `Tangent0X` (System.Double): Tangent vector at one end of curve
- `Tangent0Y` (System.Double): Tangent vector at one end of curve
- `Tangent0Z` (System.Double): Tangent vector at one end of curve
- `Tangent1X` (System.Double): Tangent vector at other end of curve
- `Tangent1Y` (System.Double): Tangent vector at other end of curve
- `Tangent1Z` (System.Double): Tangent vector at other end of curve

## Return Value

Unknown.

## Remarks

The SOLIDWORKS API Freeform-related methods are intended to journal the actions performed by an interactive user while creating the feature. Because user interaction is required to create a Freeform feature, fully automating the creation of it is not possible using the SOLIDWORKS API.
The typical steps performed by an interactive user to create a Freeform feature are:
Select the face to form.
Add curves on the selected face. Corresponds to IFeatureManager::SetFreeformCurveData.
Add points on the curves. Corresponds to
IFeatureManager::SetFreeformPointData
.
Specify boundary continuity. Corresponds to
IFeatureManager::SetFreeformBoundaryContinuity
.
Interactively pull or push the points to change the shape of the selected face.
Insert the Freeform feature. Corresponds to this method,
IFeatureManager::InsertFreeform2
.
Record a macro while interactively creating a Freeform feature, then examine the macro to see the order in which the Freeform-related methods are recorded.