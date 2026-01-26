---
type: method
interface: IAdvancedSelectionCriteria
member: LoadCriteria
returns: System.Boolean
parameters:
  -
    name: CriteriaFileName
    type: System.String
    description: Path and filename of query file (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related: []
keywords:
  - loadcriteria
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - load
  - file
  - name
  - string
  - boolean
---

# IAdvancedSelectionCriteria.LoadCriteria

Loads the specified query file and makes it the current advanced component selection criteria list.

## Signature

```csharp
System.Boolean LoadCriteria( 
   System.String
CriteriaFileName
)
```
## Parameters

- `CriteriaFileName` (System.String): Path and filename of query file (see Remarks )

## Return Value

True if query file loads, false if not

## Remarks

Specify CriteriaFileName with either a
*.xml
file or a legacy
*.sqy
file.
To create a
*.xml
query file, you can either:
Use the Advanced Component Selection dialog (
Standard toolbar > Advanced Select
) to export a query file in XML format.
- or -
Open a txt file in Notepad and add content as follows:
<?xml version="1.0" encoding="UTF-8"?>
<SWQueryList>
<Query Name="InContextHasMate" Favourites_Index="1">
<Boolean Name="And" Category="In Context Relations" SubCategory="Has mate to part" Condition="=" Value="base plate-1@98food processor"/>
</Query>
</SWQueryList>
Replace the attribute values in the <Query> and <Boolean> elements as required. Refer to the
Assemblies > Basic Component Operations > Selecting Components > Advanced Component Selection > Search Criteria for Advanced Component Selection
topic in the SOLIDWORKS help to see all the options for populating the Category (Category1 in the dialog), SubCategory (Category2 in the dialog), Condition, and Value attributes.
In <Query> Favourites_Index specifies where the query appears at the end of the Select toolbar. This attribute corresponds to the row number in the Manage Searches tab of the dialog.
In <Boolean> Name specifies "And" (default) or "Or" to indicate whether to logically AND or OR multiple Boolean elements in the Query element. This attribute corresponds to the And/Or column in the dialog.
Add more <Query> and <Boolean> elements as needed to further constrain your query.
Save the query file with a
.xml
extension.
After calling this method, call
IAdvancedSelectionCriteria::Select
to select the assembly components that satisfy the query criteria.

## Examples

- IAdvancedSelectionCriteria (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSelectionCriteria)