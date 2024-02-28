export class XPathBuilder {
	private baseXPath: string;

	constructor(base: string = "//") {
		this.baseXPath = base;
	}

	anyElement() {
		return new XPathBuilder(`${this.baseXPath}*`);
	}

	span() {
		return new XPathBuilder(`${this.baseXPath}span`);
	}

	th() {
		return new XPathBuilder(`${this.baseXPath}th`);
	}

	tr() {
		return new XPathBuilder(`${this.baseXPath}tr`);
	}

	a() {
		return new XPathBuilder(`${this.baseXPath}a`);
	}

	h1() {
		return new XPathBuilder(`${this.baseXPath}h1`);
	}

	h2() {
		return new XPathBuilder(`${this.baseXPath}h2`);
	}

	h3() {
		return new XPathBuilder(`${this.baseXPath}h3`);
	}

	p() {
		return new XPathBuilder(`${this.baseXPath}p`);
	}

	ul() {
		return new XPathBuilder(`${this.baseXPath}ul`);
	}

	li() {
		return new XPathBuilder(`${this.baseXPath}li`);
	}

	div() {
		return new XPathBuilder(`${this.baseXPath}div`);
	}

	caption() {
		return new XPathBuilder(`${this.baseXPath}caption`);
	}

	tbody() {
		return new XPathBuilder(`${this.baseXPath}tbody`);
	}

	input() {
		return new XPathBuilder(`${this.baseXPath}input`);
	}

	button() {
		return new XPathBuilder(`${this.baseXPath}button`);
	}

	textarea() {
		return new XPathBuilder(`${this.baseXPath}textarea`);
	}

	withText(text: string) {
		return new XPathBuilder(`${this.baseXPath}[text()='${text}']`);
	}

	containsText(text: string) {
		return new XPathBuilder(`${this.baseXPath}[contains(text(),'${text}')]`);
	}


	withId(id: string) {
		return new XPathBuilder(`${this.baseXPath}[@id='${id}']`);
	}

	withName(name: string) {
		return new XPathBuilder(`${this.baseXPath}[@name='${name}']`);
	}

	withTitle(title: string) {
		return new XPathBuilder(`${this.baseXPath}[@title='${title}']`);
	}

	withClass(className: string) {
		return new XPathBuilder(`${this.baseXPath}[@class='${className}']`);
	}

	withLabel(label: string) {
		return new XPathBuilder(`${this.baseXPath}[@aria-label='${label}']`);
	}

	withPlaceholder(placeholder: string) {
		return new XPathBuilder(`${this.baseXPath}[@placeholder='${placeholder}']`);
	}

	withRole(role: string) {
		return new XPathBuilder(`${this.baseXPath}[@role='${role}']`);
	}

	withValue(value: string) {
		return new XPathBuilder(`${this.baseXPath}[@value='${value}']`);
	}

	withHref(value: string) {
		return new XPathBuilder(`${this.baseXPath}[@href='${value}']`);
	}

	followingSibling() {
		return new XPathBuilder(`${this.baseXPath}/following-sibling::`);
	}

	precedingSibling() {
		return new XPathBuilder(`${this.baseXPath}/preceding-sibling::`);
	}

	parent() {
		return new XPathBuilder(`${this.baseXPath}/parent::`);
	}

	child() {
		return new XPathBuilder(`${this.baseXPath}/child::`);
	}

	startsWith(attr: string, value: string) {
		return new XPathBuilder(`${this.baseXPath}[starts-with(@${attr},'${value}')]`);
	}

	atIndex(index: number) {
		return new XPathBuilder(`(${this.baseXPath})[${index}]`);
	}

	build() {
		return this.baseXPath;
	}
}
