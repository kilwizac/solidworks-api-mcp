---
type: method
interface: IModelDoc2
member: FeatureReferenceCurve
returns: System.Object
parameters:
  -
    name: NumOfCurves
    type: System.Int32
    description: Number of curves from which to create the object
  -
    name: BaseCurves
    type: System.Object
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
  - IModelDoc2.IFeatureReferenceCurve
keywords:
  - curve
  - see
  - also
  - icurve
  - reference
  - geometry
  - ireferencecurve
  - featurereferencecurve
  - imodeldoc2
  - model
  - doc2
  - feature
  - num
  - curves
  - int32
  - base
  - object
  - merge
  - boolean
  - file
  - name
  - string
  - error
  - code
  - create
  - vb
  - net
  - vba
---

# IModelDoc2.FeatureReferenceCurve

Creates a reference curve feature from an array of curves.

## Signature

```csharp
System.Object FeatureReferenceCurve( 
   System.Int32
NumOfCurves
,
   System.Object
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
- `BaseCurves` (System.Object): Array of curves
- `Merge` (System.Boolean): True creates a single reference curve feature, false creates a reference curve feature for each curve in the array
- `FromFileName` (System.String): Not used
- `ErrorCode` (System.Int32): Error code as defined in swFeatureError_e

## Return Value

Reference curve

## Examples

- Create Reference Curve (C#) (Create_Reference_Curve_Example_CSharp.htm)
- Create Reference Curve (VB.NET) (Create_Reference_Curve_Example_VBNET.htm)
- Create Reference Curve (VBA) (Create_Reference_Curve_Example_VB.htm)

## See Also

- `IModelDoc2.IFeatureReferenceCurve`