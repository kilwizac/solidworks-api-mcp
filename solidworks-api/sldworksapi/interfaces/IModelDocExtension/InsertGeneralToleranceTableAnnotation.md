---
type: method
interface: IModelDocExtension
member: InsertGeneralToleranceTableAnnotation
returns: GeneralToleranceTableAnnotation
parameters:
  -
    name: TemplateName
    type: System.String
    description: Path and file name of the table template to use (see Remarks )
  -
    name: X
    type: System.Int32
    description: X coordinate of this table annotation
  -
    name: Y
    type: System.Int32
    description: Y coordinate of this table annotation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IGeneralToleranceTableFeature
keywords:
  - table
  - annotations
  - see
  - also
  - itableannotation
  - general
  - tolerance
  - tables
  - insertgeneraltolerancetableannotation
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - annotation
  - template
  - name
  - string
  - int32
  - vba
  - vb
  - net
---

# IModelDocExtension.InsertGeneralToleranceTableAnnotation

Inserts a general tolerance table annotation in this model document.

## Signature

```csharp
GeneralToleranceTableAnnotation InsertGeneralToleranceTableAnnotation( 
   System.String
TemplateName
,
   System.Int32
X
,
   System.Int32
Y
)
```
## Parameters

- `TemplateName` (System.String): Path and file name of the table template to use (see Remarks )
- `X` (System.Int32): X coordinate of this table annotation
- `Y` (System.Int32): Y coordinate of this table annotation

## Return Value

IGeneralToleranceTableAnnotation

## Remarks

Specify TemplateName with
install_dir
\lang\
lang
\bom-standard.sldbomtbt
.

## Examples

- Insert General Tolerance Table (VBA) (Insert_General_Tolerance_Table_Example_VB.htm)
- Insert General Tolerance Table (VB.NET) (Insert_General_Tolerance_Table_Example_VBNET.htm)
- Insert General Tolerance Table (C#) (Insert_General_Tolerance_Table_Example_CSharp.htm)

## See Also

- `IGeneralToleranceTableFeature`