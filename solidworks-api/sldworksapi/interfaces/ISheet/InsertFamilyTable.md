---
type: method
interface: ISheet
member: InsertFamilyTable
returns: System.Object
parameters:
  -
    name: AttachToAnchorPoint
    type: System.Boolean
    description: True to insert the family table at the existing family table anchor point, false to anchor the table at the point specified by X and Y
  -
    name: X
    type: System.Double
    description: X coordinate for the placement of the family table annotation
  -
    name: Y
    type: System.Double
    description: Y coordinate for the placement of the family table annotation
  -
    name: ModelName
    type: System.String
    description: Name of part or assembly on whose drawing sheet to insert the family table
  -
    name: TableTemplateName
    type: System.String
    description: Path and filename of the template that corresponds to this type of table (see Remarks )
  -
    name: DimColumnType
    type: System.Int32
    description: Dimension column type as defined by swFamilyTableDimColumnType_e
  -
    name: UseAllConfigs
    type: System.Boolean
    description: True to use all configurations, false to only use ConfigArray configurations
  -
    name: ConfigArray
    type: System.Object
    description: Array of configurations to use; valid only if UseAllConfigs is false
  -
    name: ItemNumberStart
    type: System.Int32
    description: Starting item number
  -
    name: ItemNumberIncrement
    type: System.Int32
    description: Item number increment
  -
    name: FollowConfigTreeOrder
    type: System.Boolean
    description: True to follow the configuration tree order, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - insertfamilytable
  - isheet
  - sheet
  - insert
  - family
  - table
  - attach
  - anchor
  - point
  - boolean
  - double
  - model
  - name
  - string
  - template
  - dim
  - column
  - type
  - int32
  - use
  - all
  - configs
  - config
  - array
  - object
  - item
  - number
  - start
  - increment
  - follow
  - tree
  - order
---

# ISheet.InsertFamilyTable

Inserts a family table in this drawing sheet.

## Signature

```csharp
System.Object InsertFamilyTable( 
   System.Boolean
AttachToAnchorPoint
,
   System.Double
X
,
   System.Double
Y
,
   System.String
ModelName
,
   System.String
TableTemplateName
,
   System.Int32
DimColumnType
,
   System.Boolean
UseAllConfigs
,
   System.Object
ConfigArray
,
   System.Int32
ItemNumberStart
,
   System.Int32
ItemNumberIncrement
,
   System.Boolean
FollowConfigTreeOrder
)
```
## Parameters

- `AttachToAnchorPoint` (System.Boolean): True to insert the family table at the existing family table anchor point, false to anchor the table at the point specified by X and Y
- `X` (System.Double): X coordinate for the placement of the family table annotation
- `Y` (System.Double): Y coordinate for the placement of the family table annotation
- `ModelName` (System.String): Name of part or assembly on whose drawing sheet to insert the family table
- `TableTemplateName` (System.String): Path and filename of the template that corresponds to this type of table (see Remarks )
- `DimColumnType` (System.Int32): Dimension column type as defined by swFamilyTableDimColumnType_e
- `UseAllConfigs` (System.Boolean): True to use all configurations, false to only use ConfigArray configurations
- `ConfigArray` (System.Object): Array of configurations to use; valid only if UseAllConfigs is false
- `ItemNumberStart` (System.Int32): Starting item number
- `ItemNumberIncrement` (System.Int32): Item number increment
- `FollowConfigTreeOrder` (System.Boolean): True to follow the configuration tree order, false to not

## Return Value

IFamilyTableAnnotation

## Remarks

Family tables display the variations in part and assembly configurations or custom properties in table format.
By default, the family table templates are in
install_dir
\
lang
\
language
and have a filename extension of
.sldfamtbt
. The template and table must be of the same type. For example, you must specify TableTemplate with
install_dir
\lang\English\family-standard.sldfamtbt
if you want to insert the English version of a family table.
For more information about family tables, see the
SOLIDWORKS Design user-interface Help > Detailing and Drawings > Tables > Family Tables
topics.