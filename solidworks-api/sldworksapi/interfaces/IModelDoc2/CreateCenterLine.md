---
type: method
interface: IModelDoc2
member: CreateCenterLine
returns: System.Boolean
parameters:
  -
    name: P1
    type: System.Object
    description: Array of 3 doubles (x1, y1, z1) in meters that describe the first point of the line
  -
    name: P2
    type: System.Object
    description: Array of 3 doubles (x2, y2, z2) in meters that describe the second point of the line
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ICreateCenterLine
keywords:
  - createcenterline
  - imodeldoc2
  - model
  - doc2
  - create
  - center
  - line
  - p1
  - object
  - p2
  - boolean
---

# IModelDoc2.CreateCenterLine

Obsolete. Superseded by ISketchManager::CreateCenterLine.

## Signature

```csharp
System.Boolean CreateCenterLine( 
   System.Object
P1
,
   System.Object
P2
)
```
## Parameters

- `P1` (System.Object): Array of 3 doubles (x1, y1, z1) in meters that describe the first point of the line
- `P2` (System.Object): Array of 3 doubles (x2, y2, z2) in meters that describe the second point of the line

## Return Value

True if success, false if not

## Remarks

Use
IModelDoc2::CreateCenterLineVB
for Visual Basic for Applications (VBA) and other forms of Basic that do not support SafeArrays.
You can also create centerline construction geometry using
IModelDoc2::CreateLine2
and
ISketchSegment::ConstructionGeometry
.

## See Also

- `IModelDoc2.ICreateCenterLine`