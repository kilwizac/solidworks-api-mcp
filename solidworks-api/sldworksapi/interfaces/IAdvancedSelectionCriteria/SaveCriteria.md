---
type: method
interface: IAdvancedSelectionCriteria
member: SaveCriteria
returns: System.Boolean
parameters:
  -
    name: CriteriaFileName
    type: System.String
    description: Path and filename ( *.xml ) to which to save the current query
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - file-io
  - selections
related: []
keywords:
  - savecriteria
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - save
  - file
  - name
  - string
  - boolean
---

# IAdvancedSelectionCriteria.SaveCriteria

Saves the current query to the specified XML file.

## Signature

```csharp
System.Boolean SaveCriteria( 
   System.String
CriteriaFileName
)
```
## Parameters

- `CriteriaFileName` (System.String): Path and filename ( *.xml ) to which to save the current query

## Return Value

True if current query is saved successfully, false if not

## Remarks

Call this method after
adding
criteria to the current advanced component selection criteria list.
As of SOLIDWORKS 2021, you can save queries only in XML format.
As is done using the Advanced Component Selection dialog (
Standard toolbar > Advanced Select
), this method creates a query file in XML format with one or more <Query> and <Boolean> elements. Each <Query> element represents a particular search by Category (Category1 in the user interface) and SubCategory (Category2 in the user interface) to satisfy a Condition expression:
?xml version="1.0" encoding="UTF-8"?>
<SWQueryList>
<Query Name="SelectPegs" Favourites_Index="1">
<Boolean Name="And" Category="Custom Property" SubCategory="IsPeg" Condition="=" Value="Yes"/>
</Query>
<Query Name="SelectBlockParts" Favourites_Index="2">
<Boolean Name="And" Category="Custom Property" SubCategory="IsBlockPart" Condition="=" Value="Yes"/>
</Query>
</SWQueryList>