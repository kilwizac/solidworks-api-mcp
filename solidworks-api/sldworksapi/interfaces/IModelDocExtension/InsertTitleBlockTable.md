---
type: method
interface: IModelDocExtension
member: InsertTitleBlockTable
returns: TitleBlockTableAnnotation
parameters:
  -
    name: TemplateName
    type: System.String
    description: Fully qualified path and name of the title block table template
  -
    name: X
    type: System.Int32
    description: x coordinate for upper-left corner of title block table
  -
    name: Y
    type: System.Int32
    description: y coordinate for upper-left corner of title block table
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.InsertGeneralTableAnnotation
keywords:
  - table
  - title
  - block
  - annotations
  - see
  - also
  - itableannotation
  - blocks
  - parts
  - ipartdoc
  - tables
  - assemblies
  - iassemblydoc
  - inserttitleblocktable
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - template
  - name
  - string
  - int32
  - annotation
  - vba
  - vb
  - net
---

# IModelDocExtension.InsertTitleBlockTable

Inserts a title block table in a part or assembly document.

## Signature

```csharp
TitleBlockTableAnnotation InsertTitleBlockTable( 
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

- `TemplateName` (System.String): Fully qualified path and name of the title block table template
- `X` (System.Int32): x coordinate for upper-left corner of title block table
- `Y` (System.Int32): y coordinate for upper-left corner of title block table

## Return Value

Title block table annotation

## Remarks

Title block table templates have a filename extension of
.sldtbt
.

## Examples

- Get Title Block Tables (VBA) (Get_Title_Block_Tables_Example_VB6.htm)
- Get Title Block Tables (VB.NET) (Get_Title_Block_Tables_Example_VBNET.htm)
- Get Title Block Tables (C#) (Get_Title_Block_Tables_Example_CSharp.htm)

## See Also

- `IModelDocExtension.InsertGeneralTableAnnotation`