---
type: method
interface: IFeatureManager
member: IsNameUsed
returns: System.Boolean
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of entity or entities whose names to check as defined by swNameType_e
  -
    name: Name
    type: System.String
    description: Name of entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - names
  - name
  - isnameused
  - feature
  - manager
  - used
  - type
  - int32
  - string
  - boolean
---

# IFeatureManager.IsNameUsed

Checks to see whether the specified name is unique in the FeatureManager design tree and valid to use.

## Signature

```csharp
System.Boolean IsNameUsed( 
   System.Int32
Type
,
   System.String
Name
)
```
## Parameters

- `Type` (System.Int32): Type of entity or entities whose names to check as defined by swNameType_e
- `Name` (System.String): Name of entity

## Return Value

True if name is in use (i.e., not valid to use again); false if the name is not in use (i.e., valid to use)

## Remarks

Call this method before calling
IBody2::Name
to check to see if the new name specified for the selected body is valid.