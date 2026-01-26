---
type: method
interface: ISurface
member: EvaluateAtPoint
returns: System.Object
parameters:
  -
    name: PositionX
    type: System.Double
    description: X position
  -
    name: PositionY
    type: System.Double
    description: Y position
  -
    name: PositionZ
    type: System.Double
    description: Z position
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.Evaluate
  - ISurface.IEvaluate
  - ISurface.IEvaluateAtPoint
  - ISurface.IParameterization
  - ISurface.IReverseEvaluate
  - ISurface.Parameterization
  - ISurface.ReverseEvaluate
keywords:
  - evaluateatpoint
  - isurface
  - surface
  - evaluate
  - point
  - position
  - double
  - object
  - determine
  - type
  - face
  - vba
  - points
  - select
  - tangent
  - faces
  - edges
  - all
  - holes
  - vb
  - net
---

# ISurface.EvaluateAtPoint

Evaluates a surface at the specified XYZ point.

## Signature

```csharp
System.Object EvaluateAtPoint( 
   System.Double
PositionX
,
   System.Double
PositionY
,
   System.Double
PositionZ
)
```
## Parameters

- `PositionX` (System.Double): X position
- `PositionY` (System.Double): Y position
- `PositionZ` (System.Double): Z position

## Return Value

Array of doubles (see Remarks )

## Remarks

This method calculates the normal, the principal directions, and the principal curvatures, of the surface at the specified point.
Use
IFace2::FaceInSurfaceSense
to check the directions of the face normal and surface normal. IFace2::FaceInSurfaceSense returns true when the face normal and surface normal point in opposite directions, and false when they point in the same direction.
The return value is the following array of eleven doubles:
[
surfNorm[i, j, k], principalDir1[i, j, k], principalDir2[I, j, k], principalCurvature1, principalCurvature2
]
where:
surfNorm[i, j, k] =
normalized vector describing the surface normal
principalDir1[i, j, k
] = normalized vector describing the first principal direction
principalDir2[i, j, k
] = normalized vector describing the second principal direction
principalCurvature1 =
first principal curvature
principalCurvature2 =
second principal curvature
Principal Curvature 1 is the minimum normal curvature at the point (largest radius). Principal Curvature 2 is the maximum normal curvature at the point.
The tangent direction producing Principal Curvature 1 is called the first principal direction, and the tangent direction producing Principal Curvature 2 is called the second principal direction.
It is a property of differentiable surfaces that principalDir1 and principalDir2 are orthogonal.
A positive curvature by convention implies a centre of curvature on the side pointed away from by the surface normal (convex).
See "Faux and Pratt Computational Geometry for Design and Manufacture" for more information.

## Examples

- Determine Type of Face (VBA) (Determine_Type_of_Face_Example_VB.htm)
- Evaluate Points on Surface (VBA) (Evaluate_Points_on_Surface_Example_VB.htm)
- Select Tangent Faces (VBA) (Select_Tangent_Faces_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)

## See Also

- `ISurface.Evaluate`
- `ISurface.IEvaluate`
- `ISurface.IEvaluateAtPoint`
- `ISurface.IParameterization`
- `ISurface.IReverseEvaluate`
- `ISurface.Parameterization`
- `ISurface.ReverseEvaluate`