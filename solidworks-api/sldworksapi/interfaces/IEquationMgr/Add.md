---
type: method
interface: IEquationMgr
member: Add
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the new equation (-1 places it at the end of the list)
  -
    name: Equation
    type: System.String
    description: String containing the equation
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Delete
  - IEquationMgr.Equation
  - IEquationMgr.GetCount
  - IEquationMgr.Status
keywords:
  - add
  - iequationmgr
  - equation
  - mgr
  - index
  - int32
  - string
---

# IEquationMgr.Add

Obsolete. Superseded by IEquationMgr::Add2.

## Signature

```csharp
System.Int32 Add( 
   System.Int32
Index
,
   System.String
Equation
)
```
## Parameters

- `Index` (System.Int32): Index of the new equation (-1 places it at the end of the list)
- `Equation` (System.String): String containing the equation

## Return Value

Index of the equation; -1 if there was an error

## Remarks

The string specified for the equation argument must be formatted as if entered in the SOLIDWORKS Design user interface (that is, you must embed the names of the dimensions in double quotes). For example:
"N_SPOKES@CirPattern1" = "BARLENGTH@Sketch2" /10
You can also use the Visual Basic IIf function when specifying a model dimension in the equation argument. For example:
"D1@Extrude2" = (IIf("D1@Extrude3">20, 15, 6))+5

## See Also

- `IEquationMgr.Delete`
- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.Status`