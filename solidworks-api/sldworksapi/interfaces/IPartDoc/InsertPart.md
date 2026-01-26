---
type: method
interface: IPartDoc
member: InsertPart
returns: Feature
parameters:
  -
    name: FileName
    type: System.String
    description: Name of part file
  -
    name: ImportPlane
    type: System.Boolean
    description: True if the planes from the part should be imported into this part, false if not
  -
    name: ImportAxis
    type: System.Boolean
    description: True if the axes from the part should be imported into this part, false if not
  -
    name: ImportCThread
    type: System.Boolean
    description: True if the cosmetic threads from the part should be imported into this part, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - parts
  - ui
related: []
keywords:
  - insertpart
  - ipartdoc
  - part
  - doc
  - insert
  - file
  - name
  - string
  - import
  - plane
  - boolean
  - axis
  - thread
  - feature
---

# IPartDoc.InsertPart

Obsolete. Superseded by IPartDoc::InsertPart2.

## Signature

```csharp
Feature InsertPart( 
   System.String
FileName
,
   System.Boolean
ImportPlane
,
   System.Boolean
ImportAxis
,
   System.Boolean
ImportCThread
)
```
## Parameters

- `FileName` (System.String): Name of part file
- `ImportPlane` (System.Boolean): True if the planes from the part should be imported into this part, false if not
- `ImportAxis` (System.Boolean): True if the axes from the part should be imported into this part, false if not
- `ImportCThread` (System.Boolean): True if the cosmetic threads from the part should be imported into this part, false if not

## Return Value

New feature

## Remarks

This method inserts the specified part at the origin of this part. To position the insert part at a different location or orientation or both, use
IFeatureManager::InsertMoveCopyBody2
.
The interface returned by this method is
IFeature
, which gives you access to the feature APIs such as
IFeature::Name
to get or set the name of the feature.