---
type: method
interface: IModeler
member: CreateBodiesFromSheets2
returns: System.Object
parameters:
  -
    name: Sheets
    type: System.Object
    description: Array containing the shee ts
  -
    name: Options
    type: System.Int32
    description: Type of body to create as defined by swSheetSewingOption_e
  -
    name: KnittingTolerance
    type: System.Double
    description: Knitting tolerance
  -
    name: Error
    type: System.Int32
    description: Error as defined by swSheetSewingError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateBodyFromBox
  - IModeler.CreateBodyFromCone
  - IModeler.CreateBodyFromCyl
  - IModeler.CreateBodyFromFaces2
  - IModeler.CreateBrepBody3
  - IModeler.CreateExtrudedBody
  - IModeler.CreateSweptBody
  - IModeler.CreateWireBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateBrepBody3
  - IModeler.ICreateWireBody
keywords:
  - sheet
  - bodies
  - solid
  - create
  - sew
  - knit
  - see
  - also
  - ibody2
  - surface
  - createbodiesfromsheets2
  - imodeler
  - modeler
  - sheets2
  - sheets
  - object
  - options
  - int32
  - knitting
  - tolerance
  - double
  - error
---

# IModeler.CreateBodiesFromSheets2

Sews sheets to make sheet (surface) or solid bodies.

## Signature

```csharp
System.Object CreateBodiesFromSheets2( 
   System.Object
Sheets
,
   System.Int32
Options
,
   System.Double
KnittingTolerance
,
   out System.Int32
Error
)
```
## Parameters

- `Sheets` (System.Object): Array containing the shee ts
- `Options` (System.Int32): Type of body to create as defined by swSheetSewingOption_e
- `KnittingTolerance` (System.Double): Knitting tolerance
- `Error` (System.Int32): Error as defined by swSheetSewingError_e

## Return Value

Array of the sheet or solid bodies

## Remarks

It is safest to assume that the maximum number of bodies that can be returned by this method is the number of sheet input bodies.

## See Also

- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCone`
- `IModeler.CreateBodyFromCyl`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateSweptBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateWireBody`