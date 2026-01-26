---
type: method
interface: IModeler
member: ICreateBodiesFromSheets2
returns: System.Int32
parameters:
  -
    name: NSheets
    type: System.Int32
    description: Number of sheets
  -
    name: Sheets
    type: Body2
    description: Array containing the sheets
  -
    name: Options
    type: System.Int32
    description: Type of body to create as defined by swSheetSewingOption_e
  -
    name: KnittingTolerance
    type: System.Double
    description: Knitting tolerance
  -
    name: NResults
    type: System.Int32
    description: Number of sheet or solid bodies created
  -
    name: Results
    type: Body2
    description: Array of the sheet or solid bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateBodiesFromSheets2
  - IModeler.CreateBodyFromBox
  - IModeler.CreateBodyFromCone
  - IModeler.CreateBodyFromCyl
  - IModeler.CreateBodyFromFaces2
  - IModeler.CreateBrepBody3
  - IModeler.CreateExtrudedBody
  - IModeler.CreateSweptBody
  - IModeler.CreateWireBody
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
  - icreatebodiesfromsheets2
  - imodeler
  - modeler
  - sheets2
  - sheets
  - int32
  - body2
  - options
  - knitting
  - tolerance
  - double
  - results
---

# IModeler.ICreateBodiesFromSheets2

Sews sheets to make a sheet (surface) or solid bodies.

## Signature

```csharp
System.Int32 ICreateBodiesFromSheets2( 
   System.Int32
NSheets
,
   ref Body2
Sheets
,
   System.Int32
Options
,
   System.Double
KnittingTolerance
,
   out System.Int32
NResults
,
   out Body2
Results
)
```
## Parameters

- `NSheets` (System.Int32): Number of sheets
- `Sheets` (Body2): Array containing the sheets
- `Options` (System.Int32): Type of body to create as defined by swSheetSewingOption_e
- `KnittingTolerance` (System.Double): Knitting tolerance
- `NResults` (System.Int32): Number of sheet or solid bodies created
- `Results` (Body2): Array of the sheet or solid bodies

## Return Value

Error as defined by swSheetSewingError_e

## Remarks

It is safest to assume that the maximum number of bodies that can be returned by this method is the number of sheet input bodies. Your code should look like this:
aBodies = new IBody2*[lNumSheetBodies];
hres = swModeler->ICreateBodiesFromSheets2(lNumSheetBodies, aSheetBodies, swSewToSheets, 1e-6, &lNumBodies, aBodies, &lErrors);

## See Also

- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCone`
- `IModeler.CreateBodyFromCyl`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateSweptBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateWireBody`