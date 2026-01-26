---
type: method
interface: IModelDoc
member: IFeatureReferenceCurve
returns: ReferenceCurve
parameters:
  -
    name: NumOfCurves
    type: System.Int32
    description: 
  -
    name: BaseCurves
    type: System.Intptr
    description: 
  -
    name: Merge
    type: System.Boolean
    description: 
  -
    name: FromFileName
    type: System.String
    description: 
  -
    name: ErrorCode
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - ifeaturereferencecurve
  - imodeldoc
  - model
  - doc
  - feature
  - reference
  - curve
  - num
  - curves
  - int32
  - base
  - intptr
  - merge
  - boolean
  - file
  - name
  - string
  - error
  - code
---

# IModelDoc.IFeatureReferenceCurve

Obsolete. Superseded by IModelDoc2::IFeatureReferenceCurve.

## Signature

```csharp
ReferenceCurve IFeatureReferenceCurve( 
   System.Int32
NumOfCurves
,
   System.IntPtr
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

- `NumOfCurves` (System.Int32): 
- `BaseCurves` (System.Intptr): 
- `Merge` (System.Boolean): 
- `FromFileName` (System.String): 
- `ErrorCode` (System.Int32): 

## Return Value

Unknown.