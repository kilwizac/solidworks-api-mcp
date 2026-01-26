---
type: method
interface: IModelDoc2
member: InsertBendTableNew
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: File name of this new bend table
  -
    name: Units
    type: System.String
    description: Millimeters Centimeters Meters Inches Feet
  -
    name: Type
    type: System.String
    description: Bend Allowance Bend Deduction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.DeleteBendTable
  - IModelDoc2.InsertBendTableEdit
  - IModelDoc2.InsertBendTableOpen
keywords:
  - bend
  - table
  - bends
  - text
  - file
  - insertbendtablenew
  - imodeldoc2
  - model
  - doc2
  - insert
  - new
  - name
  - string
  - units
  - type
  - boolean
---

# IModelDoc2.InsertBendTableNew

Inserts a new bend table into the model document.

## Signature

```csharp
System.Boolean InsertBendTableNew( 
   System.String
FileName
,
   System.String
Units
,
   System.String
Type
)
```
## Parameters

- `FileName` (System.String): File name of this new bend table
- `Units` (System.String): Millimeters Centimeters Meters Inches Feet
- `Type` (System.String): Bend Allowance Bend Deduction

## Return Value

True if the new table is successfully inserted, false if not

## See Also

- `IModelDoc2.DeleteBendTable`
- `IModelDoc2.InsertBendTableEdit`
- `IModelDoc2.InsertBendTableOpen`