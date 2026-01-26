---
type: method
interface: IPartDoc
member: InsertPart2
returns: Feature
parameters:
  -
    name: FileName
    type: System.String
    description: Name of part file
  -
    name: Options
    type: System.Int32
    description: Insertion options as defined in swInsertPartOptions_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IDerivedPartFeatureData
keywords:
  - insertpart2
  - ipartdoc
  - part
  - doc
  - insert
  - part2
  - file
  - name
  - string
  - options
  - int32
  - feature
---

# IPartDoc.InsertPart2

Obsolete. Superseded by IPartDoc::InsertPart3.

## Signature

```csharp
Feature InsertPart2( 
   System.String
FileName
,
   System.Int32
Options
)
```
## Parameters

- `FileName` (System.String): Name of part file
- `Options` (System.Int32): Insertion options as defined in swInsertPartOptions_e

## Return Value

Inserted feature

## Remarks

This method inserts the specified part at the origin of this part. To position the inserted part at a different location or orientation or both, use
IFeatureManager::InsertMoveCopyBody2
.

## See Also

- `IDerivedPartFeatureData`