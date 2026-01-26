---
type: method
interface: IModelDoc2
member: IFeatureReferenceCurve
returns: ReferenceCurve
parameters:
  -
    name: NumOfCurves
    type: System.Int32
    description: Number of curves from which to create the object
  -
    name: BaseCurves
    type: Curve
    description: Array of curves
  -
    name: Merge
    type: System.Boolean
    description: True creates a single reference curve feature, false creates a reference curve feature for each curve in the array
  -
    name: FromFileName
    type: System.String
    description: Not used
  -
    name: ErrorCode
    type: System.Int32
    description: Error code as defined in swFeatureError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - IModelDoc2.FeatureReferenceCurve
keywords:
  - curve
  - see
  - also
  - icurve
  - reference
  - geometry
  - ireferencecurve
  - ifeaturereferencecurve
  - imodeldoc2
  - model
  - doc2
  - feature
  - num
  - curves
  - int32
  - base
  - merge
  - boolean
  - file
  - name
  - string
  - error
  - code
---

# IModelDoc2.IFeatureReferenceCurve

Creates a reference curve feature from an array of curves.

## Signature

```csharp
ReferenceCurve IFeatureReferenceCurve( 
   System.Int32
NumOfCurves
,
   ref Curve
BaseCurves
,
   System.Boolean
Merge
,
   System.String
FromFileName
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `NumOfCurves` (System.Int32): Number of curves from which to create the object
- `BaseCurves` (Curve): Array of curves
- `Merge` (System.Boolean): True creates a single reference curve feature, false creates a reference curve feature for each curve in the array
- `FromFileName` (System.String): Not used
- `ErrorCode` (System.Int32): Error code as defined in swFeatureError_e

## Return Value

Reference curve

## See Also

- `IModelDoc2.FeatureReferenceCurve`